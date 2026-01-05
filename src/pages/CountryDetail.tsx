import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { Country } from '../types/Country';

export default function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [borders, setBorders] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;
    let mounted = true;
    setLoading(true);
    setError(null);

    ApiService.getByCode(code)
      .then(c => {
        if (!mounted) return;
        setCountry(c);
        if (c && c.borders && c.borders.length) {
          return ApiService.getByCodes(c.borders)
            .then(list => mounted && setBorders(list))
            .catch(() => {});
        }
      })
      .catch(err => mounted && setError(String(err)))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [code]);

  function formatNativeName(c: Country) {
    try {
      const nn = c.name?.nativeName;
      if (!nn) return c.name.common;
      const first = Object.values(nn)[0];
      return first?.common || c.name.common;
    } catch {
      return c.name.common;
    }
  }

  function formatCurrencies(c: Country) {
    if (!c.currencies) return '—';
    return Object.values(c.currencies)
      .map((cur: any) => cur.name)
      .filter(Boolean)
      .join(', ');
  }

  function formatLanguages(c: Country) {
    if (!c.languages) return '—';
    return Object.values(c.languages).join(', ');
  }

  if (loading)
    return (
      <main className="rc-main" role="status" aria-live="polite">
        Loading country...
      </main>
    );
  if (error)
    return (
      <main className="rc-main" role="alert">
        Error: {error}
      </main>
    );
  if (!country)
    return (
      <main className="rc-main">
        <p>
          No country found for <strong>{code}</strong>.
        </p>
        <Link to="/" className="back-btn">
          ← Back
        </Link>
      </main>
    );

  return (
    <main className="rc-main country-detail">
      <Link to="/" className="back-btn">
        <span className="back-icon">←</span> Back
      </Link>
      <div className="detail-grid">
        <div className="detail-flag">
          <img src={country.flags?.svg || country.flags?.png} alt={`${country.name.common} flag`} />
        </div>
        <div className="detail-info">
          <h2>{country.name.common}</h2>
          <div className="detail-columns">
            <div className="detail-col">
              <p>
                <strong>Native Name:</strong> {formatNativeName(country)}
              </p>
              <p>
                <strong>Population:</strong> {country.population?.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {country.subregion || '—'}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital?.join(', ') || '—'}
              </p>
            </div>
            <div className="detail-col">
              <p>
                <strong>Top Level Domain:</strong> {country.tld?.join(', ') || '—'}
              </p>
              <p>
                <strong>Currencies:</strong> {formatCurrencies(country)}
              </p>
              <p>
                <strong>Languages:</strong> {formatLanguages(country)}
              </p>
            </div>
          </div>

          {borders.length > 0 && (
            <div className="border-countries">
              <strong>Border Countries:</strong>
              <div className="borders-list">
                {borders.map(b => (
                  <Link key={b.cca3} to={`/country/${b.cca3}`} className="chip">
                    {b.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
