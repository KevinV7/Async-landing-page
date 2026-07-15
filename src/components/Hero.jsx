import Button from './ui/Button'
import Badge from './ui/Badge'
import { profile } from '../data/portfolio'

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
        <div
          role="img"
          aria-label="Avatar de Kevin V., desarrollador de software"
          className="flex size-56 items-center justify-center rounded-brutal border-[3px] border-black bg-acid text-8xl shadow-brutal-lg sm:size-72"
        >
          <span aria-hidden="true">👨‍💻</span>
        </div>
      </div>
    </section>
  )
}
