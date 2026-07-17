import { useEffect, useState } from 'react'

const TYPING_SPEED_MS = 90
const DELETING_SPEED_MS = 45
const PAUSE_FULL_MS = 1800
const PAUSE_EMPTY_MS = 500
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

/**
 * Anima `text` en loop tipo máquina de escribir (escribe → pausa → borra → pausa → repite).
 * Respeta prefers-reduced-motion deteniendo el loop y mostrando el texto completo y estático.
 */
export function useTypewriter(text) {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion)
  const [visibleCount, setVisibleCount] = useState(() =>
    prefersReducedMotion() ? text.length : 0
  )
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const mql = window.matchMedia(REDUCED_MOTION_QUERY)
    const handleChange = (event) => setReducedMotion(event.matches)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(text.length)
      return undefined
    }

    if (phase === 'typing') {
      if (visibleCount < text.length) {
        const id = setTimeout(() => setVisibleCount((count) => count + 1), TYPING_SPEED_MS)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => setPhase('deleting'), PAUSE_FULL_MS)
      return () => clearTimeout(id)
    }

    if (visibleCount > 0) {
      const id = setTimeout(() => setVisibleCount((count) => count - 1), DELETING_SPEED_MS)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => setPhase('typing'), PAUSE_EMPTY_MS)
    return () => clearTimeout(id)
  }, [phase, visibleCount, text, reducedMotion])

  return { visibleText: text.slice(0, visibleCount) }
}
