import { useEffect, useState } from 'react'
import ApiService from '../services/ApiService'
import { Country } from '../types/Country'

export function useCountries(filters?: { query?: string; region?: string }) {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      setError(null)
      try {
        let res: Country[] = []
        if (filters?.query) {
          res = await ApiService.searchByName(filters.query)
        } else if (filters?.region) {
          res = await ApiService.filterByRegion(filters.region)
        } else {
          res = await ApiService.getAll()
        }
        if (mounted) setCountries(res)
      } catch (err) {
        if (mounted) setError(err as Error)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [filters?.query, filters?.region])

  return { countries, loading, error }
}

export default useCountries
