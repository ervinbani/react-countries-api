import React from 'react'
import { useFilters } from '../contexts/FiltersContext'

export default function FiltersBar() {
  const { region, setRegion, sortBy, setSortBy, perPage, setPerPage, reset } = useFilters()

  return (
    <div className="filters-bar" style={{display:'flex',gap:12,alignItems:'center',marginBottom:12}}>
      <label style={{display:'flex',gap:8,alignItems:'center'}}>
        Region:
        <select value={region} aria-label="Filter by region" onChange={(e) => setRegion(e.target.value)}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>

      <label style={{display:'flex',gap:8,alignItems:'center'}}>
        Sort:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
          <option value="">Default</option>
          <option value="name">Name (A–Z)</option>
          <option value="population">Population (desc)</option>
        </select>
      </label>

      <label style={{display:'flex',gap:8,alignItems:'center'}}>
        Per page:
        <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </label>

      <button onClick={reset} aria-label="Reset filters">Reset</button>
    </div>
  )
}
