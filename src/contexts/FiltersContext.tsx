import React, { createContext, useContext, useState } from 'react'

type Filters = {
  query: string
  region: string
  sortBy: 'name' | 'population' | ''
  page: number
  perPage: number
}

type FiltersContextValue = Filters & {
  setQuery: (q: string) => void
  setRegion: (r: string) => void
  setSortBy: (s: Filters['sortBy']) => void
  setPage: (p: number) => void
  setPerPage: (n: number) => void
  reset: () => void
}

const FiltersContext = createContext<FiltersContextValue | undefined>(undefined)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState<string>('')
  const [region, setRegion] = useState<string>('')
  const [sortBy, setSortBy] = useState<Filters['sortBy']>('')
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(20)

  const reset = () => {
    setQuery('')
    setRegion('')
    setSortBy('')
    setPage(1)
    setPerPage(20)
  }

  return (
    <FiltersContext.Provider
      value={{ query, region, sortBy, page, perPage, setQuery, setRegion, setSortBy, setPage, setPerPage, reset }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export function useFilters() {
  const ctx = useContext(FiltersContext)
  if (!ctx) throw new Error('useFilters must be used within FiltersProvider')
  return ctx
}

export default FiltersProvider
