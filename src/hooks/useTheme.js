import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function getInitialTheme() {
  return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'
}

/**
 * Tema global claro/oscuro. Por defecto siempre claro; solo cambia a oscuro
 * cuando el usuario lo activa manualmente, y esa elección se persiste en
 * localStorage para las próximas visitas.
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }

  return { theme, toggleTheme, isDark: theme === 'dark' }
}
