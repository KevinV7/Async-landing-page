import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

/**
 * Interruptor de tema claro/oscuro. Sol y luna hacen crossfade + rotación al
 * cambiar; respeta prefers-reduced-motion vía las reglas globales de index.css.
 */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
      className="press-effect relative inline-flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-brutal transition-[transform,box-shadow] duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-none dark:border-cream dark:bg-surface"
    >
      <span className="relative block size-5 overflow-hidden">
        <FiSun
          aria-hidden="true"
          className={`absolute inset-0 size-5 text-black transition-all duration-500 ease-out ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <FiMoon
          aria-hidden="true"
          className={`absolute inset-0 size-5 text-cream transition-all duration-500 ease-out ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </span>
    </button>
  )
}
