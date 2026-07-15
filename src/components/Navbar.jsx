import { useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#stack', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-cream">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#inicio"
          className="rounded-lg border-[3px] border-black bg-acid px-3 py-1 font-display text-lg font-bold shadow-[3px_3px_0_0_#000]"
        >
          {profile.name}
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

        <button
          type="button"
          className="press-effect rounded-lg border-[3px] border-black bg-white px-3 py-1 font-display font-bold shadow-[3px_3px_0_0_#000] transition-[transform,box-shadow] duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-none sm:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </nav>

      {open && (
        <ul
          id="menu-movil"
          className="border-t-[3px] border-black bg-white px-4 py-2 sm:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block border-b-2 border-black py-3 font-semibold last:border-b-0"
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
