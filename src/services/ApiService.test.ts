import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ApiService from './ApiService'

describe('ApiService', () => {
  const globalFetch = global.fetch

  beforeEach(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    global.fetch = globalFetch
  })

  it('getByCode returns a country when fetch resolves', async () => {
    const mockCountry = [{ cca3: 'USA', name: { common: 'United States' }, flags: { png: 'u.png' } }]
    global.fetch = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(mockCountry) })) as any

    const res = await ApiService.getByCode('USA')
    expect(res).toBeTruthy()
    expect((res as any).cca3).toBe('USA')
  })

  it('getByCodes returns list of countries', async () => {
    const mock = [{ cca3: 'CAN', name: { common: 'Canada' }, flags: { png: 'c.png' } }]
    global.fetch = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(mock) })) as any

    const res = await ApiService.getByCodes(['CAN'])
    expect(Array.isArray(res)).toBe(true)
    expect(res[0].cca3).toBe('CAN')
  })
})
