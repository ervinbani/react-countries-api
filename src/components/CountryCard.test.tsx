import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import CountryCard from './CountryCard'
import { FavoritesProvider } from '../contexts/FavoritesContext'

const mockCountry = {
  cca3: 'USA',
  name: { common: 'United States' },
  flags: { png: 'u.png' },
  population: 1000,
  region: 'Americas',
  capital: ['City'],
} as any

describe('CountryCard', () => {
  it('toggles favorite when fav button is clicked', async () => {
    render(
      <MemoryRouter>
        <FavoritesProvider>
          <CountryCard country={mockCountry} />
        </FavoritesProvider>
      </MemoryRouter>
    )

    const btn = screen.getByRole('button', { name: /add united states to favorites|remove united states from favorites/i })
    expect(btn).toBeInTheDocument()

    await userEvent.click(btn)
    expect(btn).toHaveAttribute('aria-pressed', 'true')
  })
})
