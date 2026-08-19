import Button from './ui/Button'
import Badge from './ui/Badge'
import LanguageToggle from './ui/LanguageToggle'
import { LinkedInIcon } from './ui/Icons'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { useLanguage, pick } from '../hooks/useLanguage'

export default function Hero() {
  const { language, t } = useLanguage()
  const [heroFirstName, ...heroRestName] = profile.name.split(' ')
  const heroLastName = heroRestName.join(' ')

  const { visibleText } = useTypewriter(profile.name)
  const typedFirstName = heroFirstName.slice(
    0,
    Math.min(visibleText.length, heroFirstName.length)
  )
  const untypedFirstName = heroFirstName.slice(typedFirstName.length)
  const typedLastName = heroLastName.slice(
    0,
    Math.max(0, visibleText.length - heroFirstName.length - 1)
  )
  const untypedLastName = heroLastName.slice(typedLastName.length)
  const cursorOnFirstLine = visibleText.length <= heroFirstName.length

  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-6xl items-center gap-10 overflow-hidden px-4 py-10 sm:px-6 md:grid-cols-[3fr_2fr] md:py-6"
    >
      {/* Retrato solo en desktop: en móvil el hero es texto centrado, sin foto */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute inset-0 bg-black [clip-path:polygon(64%_100%,100%_100%,100%_0%,44%_0%)]" />
        <img
          src="/avatar.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full translate-x-6 object-contain object-right [clip-path:polygon(65%_100%,100%_100%,100%_0%,45%_0%)]"
        />
      </div>

      {/*
       * Ritmo vertical único (gap) en lugar de márgenes por elemento: en móvil
       * todo va centrado y hasta `md` no se pasa a la columna alineada a la
       * izquierda que convive con el retrato de fondo.
       */}
      <div className="relative z-20 flex min-w-0 flex-col items-center gap-5 text-center md:items-start md:gap-4 md:text-left">
        <div className="flex w-full items-center justify-center gap-3 md:justify-between">
          <p className="block w-fit rounded-lg border-[3px] border-black bg-splash px-3 py-1 font-display font-bold text-black shadow-brutal">
            {t('hero.greeting')}
          </p>
          <LanguageToggle />
        </div>

        <h1
          id="hero-titulo"
          aria-label={profile.name}
          className="font-display text-[clamp(2rem,9vw,2.5rem)] font-bold leading-tight sm:text-6xl md:leading-none lg:text-7xl"
        >
          <span aria-hidden="true">
            {typedFirstName}
            {cursorOnFirstLine && <span className="cursor-blink">|</span>}
            <span className="opacity-0">{untypedFirstName}</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            {typedLastName}
            {!cursorOnFirstLine && <span className="cursor-blink">|</span>}
            <span className="opacity-0">{untypedLastName}</span>
          </span>
        </h1>

        <p className="font-display text-2xl font-bold text-black sm:text-3xl">
          <span className="box-decoration-clone bg-punch px-2 text-black">
            {pick(profile.role, language)}
          </span>
        </p>

        <p className="max-w-[34ch] text-lg leading-snug md:max-w-lg">
          {pick(profile.tagline, language)}
        </p>

        <div className="mt-1 flex flex-col items-center gap-4 md:items-start">
          <Button href="#proyectos" variant="yellow" size="lg">
            {t('hero.ctaProjects')}
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
            <Badge href={profile.cv} download="Kevin_Valladares_CV.docx" variant="white">
              {t('hero.cv')}
            </Badge>
            <Badge href={profile.linkedin} variant="white">
              <LinkedInIcon /> LinkedIn
            </Badge>
            <Badge href={`mailto:${profile.email}`} variant="white">
              {t('hero.email')}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
