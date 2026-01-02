import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function CountryDetail() {
  const { code } = useParams()
  return (
    <main className="container">
      <h1>Country: {code}</h1>
      <p>Country detail will show here.</p>
      <Link to="/">Back</Link>
    </main>
  )
}
