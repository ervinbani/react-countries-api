import React, { createContext, useContext, useEffect, useState } from 'react'

type FavoritesContextValue = {
  favorites: string[]
  toggleFavorite: (code: string) => void
  isFavorite: (code: string) => boolean
  clearFavorites: () => void
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined)

const STORAGE_KEY = 'rc_favorites'

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {}
  }, [favorites])

  function toggleFavorite(code: string) {
    setFavorites((prev) => (prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]))
  }

  function isFavorite(code: string) {
    return favorites.includes(code)
  }

  function clearFavorites() {
    setFavorites([])
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}

export default FavoritesProvider
