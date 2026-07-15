import { useState } from 'react'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { profile } from '../data/portfolio'

/*
 * Retrato dentro de un frame neobrutalista. Si la foto (profile.photo)
 * no existe todavía, cae al avatar emoji sin romper el layout.
 */
function Portrait() {
  const [photoMissing, setPhotoMissing] = useState(false)

  if (photoMissing || !profile.photo) {
    return (
      <div
        role="img"
        aria-label={`Avatar de ${profile.name}, desarrollador de software`}
        className="flex size-56 items-center justify-center rounded-brutal border-[3px] border-black bg-acid text-8xl shadow-brutal-lg sm:size-72"
      >
        <span aria-hidden="true">👨‍💻</span>
      </div>
    )
  }

  return (
    <div className="rounded-brutal border-[3px] border-black bg-acid p-2 shadow-brutal-lg">
      <img
        src={profile.photo}
        alt={`Retrato de ${profile.name}, desarrollador de software`}
        width="288"
        height="360"
        className="aspect-[4/5] w-56 rounded-lg border-[3px] border-black object-cover object-top sm:w-72"
        onError={() => setPhotoMissing(true)}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[3fr_2fr] md:py-24"
    >
      <div>
        <p className="mb-4 inline-block rounded-lg border-[3px] border-black bg-splash px-3 py-1 font-display font-bold shadow-brutal">
          👋 Hola, soy
        </p>
        <h1
          id="hero-titulo"
          className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </h1>
        <p className="mt-3 font-display text-2xl font-bold text-black sm:text-4xl">
          <span className="bg-punch box-decoration-clone px-2">
            {profile.role}
          </span>
        </p>
        <p className="mt-6 max-w-lg text-lg leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#proyectos" variant="yellow" size="lg">
            Ver proyectos →
          </Button>
          <Badge href={profile.cv} variant="white">
            📄 CV
          </Badge>
          <Badge href={profile.linkedin} variant="white">
            💼 LinkedIn
          </Badge>
          <Badge href={profile.github} variant="white">
            🐙 GitHub
          </Badge>
        </div>
      </div>

      <div className="justify-self-center md:justify-self-end">
        <Portrait />
      </div>
    </section>
  )
}
