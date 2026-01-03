import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { vi, describe, it, beforeEach, afterEach, expect } from 'vitest'
import ApiService from '../services/ApiService'
import CountryDetail from './CountryDetail'

describe('CountryDetail', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders country details and border links', async () => {
    const mockCountry = {
      cca3: 'USA',
      name: { common: 'United States', nativeName: { eng: { common: 'United States' } } },
      flags: { png: 'u.png' },
      population: 331002651,
      region: 'Americas',
      subregion: 'Northern America',
      capital: ['Washington D.C.'],
      tld: ['.us'],
      currencies: { USD: { name: 'United States dollar', symbol: '$' } },
      languages: { eng: 'English' },
      borders: ['CAN'],
    }

    const mockBorder = [{ cca3: 'CAN', name: { common: 'Canada' }, flags: { png: 'c.png' } }]

    vi.spyOn(ApiService, 'getByCode').mockResolvedValue(mockCountry as any)
    vi.spyOn(ApiService, 'getByCodes').mockResolvedValue(mockBorder as any)

    render(
      <MemoryRouter initialEntries={["/country/USA"]}>
        <Routes>
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText('United States')).toBeDefined())
    expect(screen.getByText(/Population:/)).toBeDefined()
    expect(screen.getByText('Canada')).toBeDefined()
  })
})
