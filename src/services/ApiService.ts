import { Country } from '../types/Country'

const BASE = 'https://restcountries.com/v3.1'

type CacheEntry = {
  timestamp: number
  data: any
}

const cache = new Map<string, CacheEntry>()
const CACHE_TTL = 1000 * 60 * 5 // 5 minutes
const CACHE_STORAGE_KEY = 'rc_api_cache_v1'

// hydrate in-memory cache from localStorage on startup
try {
  const raw = localStorage.getItem(CACHE_STORAGE_KEY)
  if (raw) {
    const obj = JSON.parse(raw) as Record<string, CacheEntry>
    Object.entries(obj).forEach(([k, v]) => cache.set(k, v))
  }
} catch {}

function cacheGet<T>(key: string): T | null {
  const entry = cache.get(key)
  if (!entry) return null
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key)
    return null
  }
  return entry.data as T
}

function cacheSet(key: string, data: any) {
  const entry = { timestamp: Date.now(), data }
  cache.set(key, entry)
  // persist small cache to localStorage (best-effort)
  try {
    const obj: Record<string, CacheEntry> = {}
    cache.forEach((v, k) => {
      // only persist entries still within TTL
      if (Date.now() - v.timestamp <= CACHE_TTL) obj[k] = v
    })
    localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(obj))
  } catch {}
}

async function safeFetch<T>(url: string): Promise<T> {
  const cached = cacheGet<T>(url)
  if (cached) return cached

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`)
    const data = (await res.json()) as T
    cacheSet(url, data)
    return data
  } catch (err) {
    // network failed — try to return stale cache if available
    const stale = cacheGet<T>(url)
    if (stale) return stale
    throw err
  }
}

export const ApiService = {
  async getAll(): Promise<Country[]> {
    const fields = ['cca3', 'name', 'flags', 'population', 'region', 'capital'].join(',')
    return safeFetch<Country[]>(`${BASE}/all?fields=${fields}`)
  },

  async getByCode(code: string): Promise<Country | null> {
    if (!code) return null
    const res = await safeFetch<Record<string, any>[]>(`${BASE}/alpha/${code}`)
    return res && res.length ? (res[0] as Country) : null
  },

  async searchByName(name: string): Promise<Country[]> {
    if (!name) return []
    const fields = ['cca3', 'name', 'flags', 'population', 'region', 'capital'].join(',')
    return safeFetch<Country[]>(`${BASE}/name/${encodeURIComponent(name)}?fields=${fields}`)
  },

  async filterByRegion(region: string): Promise<Country[]> {
    if (!region) return []
    const fields = ['cca3', 'name', 'flags', 'population', 'region', 'capital'].join(',')
    return safeFetch<Country[]>(`${BASE}/region/${encodeURIComponent(region)}?fields=${fields}`)
  },

  async getByCodes(codes: string[]): Promise<Country[]> {
    if (!codes || codes.length === 0) return []
    const codesParam = codes.join(',')
    const fields = ['cca3', 'name', 'flags'].join(',')
    return safeFetch<Country[]>(`${BASE}/alpha?codes=${codesParam}&fields=${fields}`)
  }
}

export default ApiService
