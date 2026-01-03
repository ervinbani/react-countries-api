import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ApiService from '../services/ApiService'
import { Country } from '../types/Country'

export default function CountryDetail() {
  const { code } = useParams()
  const [country, setCountry] = useState<Country | null>(null)
  const [borders, setBorders] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!code) return
    let mounted = true
    setLoading(true)
    setError(null)

    ApiService.getByCode(code)
      .then((c) => {
        if (!mounted) return
        setCountry(c)
        if (c && c.borders && c.borders.length) {
          return ApiService.getByCodes(c.borders)
            .then((list) => mounted && setBorders(list))
            .catch(() => {})
        }
      })
      .catch((err) => mounted && setError(String(err)))
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [code])

  function formatNativeName(c: Country) {
    try {
      const nn = c.name?.nativeName
      if (!nn) return c.name.common
      const first = Object.values(nn)[0]
      return first?.common || c.name.common
    } catch {
      return c.name.common
    }
  }

  function formatCurrencies(c: Country) {
    if (!c.currencies) return '—'
    return Object.values(c.currencies)
      .map((cur: any) => cur.name)
      .filter(Boolean)
      .join(', ')
  }

  function formatLanguages(c: Country) {
    if (!c.languages) return '—'
    return Object.values(c.languages).join(', ')
  }

  if (loading) return <main className="container" role="status" aria-live="polite">Loading country...</main>
  if (error) return <main className="container" role="alert">Error: {error}</main>
  if (!country) return (
    <main className="container">
      <p>No country found for <strong>{code}</strong>.</p>
      <Link to="/">Back</Link>
    </main>
  )

  return (
    <main className="container country-detail">
      <Link to="/" className="btn">Back</Link>
      <div className="detail-grid">
        <img src={country.flags?.png || country.flags?.svg} alt={`${country.name.common} flag`} />
        <div>
          <h2>{country.name.common}</h2>
          <p><strong>Native name:</strong> {formatNativeName(country)}</p>
          <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion || '—'}</p>
          <p><strong>Capital:</strong> {country.capital?.join(', ') || '—'}</p>
          <p><strong>Top level domain:</strong> {country.tld?.join(', ') || '—'}</p>
          <p><strong>Currencies:</strong> {formatCurrencies(country)}</p>
          <p><strong>Languages:</strong> {formatLanguages(country)}</p>

          <div className="borders">
            <strong>Border Countries:</strong>
            {borders.length ? (
              <div className="borders-list">
                {borders.map((b) => (
                  <Link key={b.cca3} to={`/country/${b.cca3}`} className="chip">{b.name.common}</Link>
                ))}
              </div>
            ) : (
              <span> None</span>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
