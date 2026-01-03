import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { FavoritesProvider } from './FavoritesContext'
import { FiltersProvider } from './FiltersContext'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <FiltersProvider>{children}</FiltersProvider>
      </FavoritesProvider>
    </ThemeProvider>
  )
}

export * from './ThemeContext'
export * from './FavoritesContext'
export * from './FiltersContext'
