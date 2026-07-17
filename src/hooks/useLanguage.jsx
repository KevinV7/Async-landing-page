import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations'

const STORAGE_KEY = 'language'
const LanguageContext = createContext(null)

function getInitialLanguage() {
  return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es'
}

function resolvePath(obj, path) {
  return path.split('.').reduce((value, key) => value?.[key], obj)
}

/** Selecciona el valor del idioma activo en un campo traducible `{ es, en }`. */
export function pick(field, language) {
  return field[language]
}

/**
 * Idioma global del sitio ES/EN. Por defecto siempre español; solo cambia a
 * inglés cuando el usuario lo activa manualmente, y esa elección se persiste
 * en localStorage para las próximas visitas (mismo criterio que useTheme).
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  function toggleLanguage() {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  function t(key, ...args) {
    const value = resolvePath(translations[language], key)
    return typeof value === 'function' ? value(...args) : value
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
