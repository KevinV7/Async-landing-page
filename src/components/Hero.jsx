import Button from './ui/Button'
import Badge from './ui/Badge'
import { LinkedInIcon } from './ui/Icons'
import { profile } from '../data/portfolio'

export default function Hero() {
  const [heroFirstName, ...heroRestName] = profile.name.split(' ')
  const heroLastName = heroRestName.join(' ')

  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-6xl items-center gap-10 overflow-hidden px-4 py-10 sm:px-6 md:grid-cols-[3fr_2fr] md:py-6"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute inset-0 bg-black [clip-path:polygon(64%_100%,100%_100%,100%_0%,44%_0%)]" />
        <img
          src="/avatar.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full translate-x-6 object-contain object-right [clip-path:polygon(65%_100%,100%_100%,100%_0%,45%_0%)]"
        />
      </div>

      <div className="relative z-20 min-w-0">
        <p className="mb-10 block w-fit rounded-lg border-[3px] border-black bg-splash px-3 py-1 font-display font-bold text-black shadow-brutal mx-auto sm:mx-0 md:mb-3">
          👋 Hola, soy
        </p>
        <h1
          id="hero-titulo"
          className="mb-10 text-center font-display text-5xl font-bold leading-none sm:text-left sm:text-6xl lg:text-7xl md:mb-0"
        >
          {heroFirstName}
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          {heroLastName}
        </h1>
        <p className="mb-10 mt-2 text-center font-display text-2xl font-bold text-black sm:text-left sm:text-3xl md:mb-0">
          <span className="bg-punch text-black box-decoration-clone px-2">
            {profile.role}
          </span>
        </p>
        <p className="mb-10 mt-2 max-w-lg text-lg leading-snug text-justify sm:text-left md:mb-0">
          {profile.tagline}
        </p>

        <div className="mt-4 flex flex-col items-center gap-12 sm:items-start md:gap-4">
          <Button href="#proyectos" variant="yellow" size="lg" >
            Ver proyectos →
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <Badge href={profile.cv} download="Kevin_Valladares_CV.docx" variant="white">
              📄 CV
            </Badge>
            <Badge href={profile.linkedin} variant="white">
              <LinkedInIcon /> LinkedIn
            </Badge>
            <Badge href={`mailto:${profile.email}`} variant="white">
              ✉️ Email
            </Badge>
          </div>
        </div>
      </div>

      <div className="justify-self-center md:hidden">
        <div className="flex size-50 items-center justify-center rounded-brutal border-[1px] sm:size-72">
          <img
            src="/avatar.avif"
            alt={`Foto de ${profile.name}, desarrollador de software`}
            className="size-50 rounded-brutal border-[5px] border-black object-cover sm:size-65"
          />
        </div>
      </div>
    </section>
  )
}
