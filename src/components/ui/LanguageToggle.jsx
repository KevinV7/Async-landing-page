import { useLanguage } from '../../hooks/useLanguage'

/**
 * Interruptor de idioma ES/EN. Muestra el código del idioma AL QUE SE CAMBIARÁ
 * (patrón estándar de toggles de idioma); crossfade igual que ThemeToggle,
 * respeta prefers-reduced-motion vía las reglas globales de index.css.
 */
export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()
  const isSpanish = language === 'es'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('languageToggle.switchAria')}
      title={t('languageToggle.switchTitle')}
      className="press-effect relative inline-flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-white shadow-brutal transition-[transform,box-shadow] duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-none dark:border-cream dark:bg-surface"
    >
      <span className="relative block size-5 overflow-hidden">
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-black transition-all duration-500 ease-out dark:text-cream ${
            isSpanish ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          EN
        </span>
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-black transition-all duration-500 ease-out dark:text-cream ${
            isSpanish ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        >
          ES
        </span>
      </span>
    </button>
  )
}
