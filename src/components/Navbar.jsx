import { useState } from 'react'
import ThemeToggle from './ui/ThemeToggle'
import { useLanguage } from '../hooks/useLanguage'

const linkDefs = [
  { href: '#stack', key: 'stack' },
  { href: '#proyectos', key: 'projects' },
  { href: '#experiencia', key: 'experience' },
  { href: '#contacto', key: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  const links = linkDefs.map((link) => ({ ...link, label: t(`nav.${link.key}`) }))

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-cream transition-colors duration-300 dark:border-cream dark:bg-ink">
      <nav
        aria-label={t('nav.ariaLabel')}
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#inicio"
          className="rounded-lg border-[3px] border-black bg-acid px-3 py-1 font-display text-lg font-bold text-black shadow-[3px_3px_0_0_var(--shadow-ink)]"
        >
          {t('nav.home')}
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded font-semibold underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="press-effect rounded-lg border-[3px] border-black bg-white px-3 py-1 font-display font-bold shadow-[3px_3px_0_0_var(--shadow-ink)] transition-[transform,box-shadow] duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-none dark:border-cream dark:bg-surface dark:text-cream sm:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? t('nav.menuClose') : t('nav.menuOpen')}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="menu-movil"
          className="border-t-[3px] border-black bg-white px-4 py-2 dark:border-cream dark:bg-surface sm:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block border-b-2 border-black py-3 font-semibold last:border-b-0 dark:border-cream/30"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
