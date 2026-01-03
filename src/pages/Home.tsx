import React from 'react'
import { useFilters } from '../contexts/FiltersContext'
import useCountries from '../hooks/useCountries'
import CountryCard from '../components/CountryCard'
import FiltersBar from '../components/FiltersBar'
import Pagination from '../components/Pagination'
import usePagination from '../hooks/usePagination'
import '../styles/main.css'
import '../styles/layout.css'

export default function Home() {
  const { query, region, sortBy, perPage: filtersPerPage, setPerPage: setFiltersPerPage } = useFilters()
  const { countries, loading, error } = useCountries({ query, region })

  // apply client-side sorting according to filters
  let displayed = countries.slice()
  if (sortBy === 'name') {
    displayed.sort((a, b) => a.name.common.localeCompare(b.name.common))
  } else if (sortBy === 'population') {
    displayed.sort((a, b) => (b.population ?? 0) - (a.population ?? 0))
  }

  // pagination: use filters' per-page as initial value
  const { page, perPage, setPerPage: setLocalPerPage, totalPages, next, prev, setPage } = usePagination(displayed.length, filtersPerPage)

  // keep pagination perPage in sync with FiltersContext
  React.useEffect(() => {
    if (perPage !== filtersPerPage) setFiltersPerPage(perPage)
  }, [perPage, filtersPerPage, setFiltersPerPage])

  const start = (page - 1) * perPage
  const paged = displayed.slice(start, start + perPage)

  return (
    <main>
      <section className="container">
        <h1>Countries</h1>
        <FiltersBar />

        {loading && <p>Loading countries…</p>}
        {error && <p role="alert">Error: {error.message}</p>}

        <div className="countries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {paged.map((c) => (
            <CountryCard key={c.cca3} country={c} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onNext={next} onPrev={prev} onPage={setPage} />
      </section>
    </main>
  )
}
