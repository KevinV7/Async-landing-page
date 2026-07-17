import Card from './ui/Card'
import Badge from './ui/Badge'
import { projects } from '../data/portfolio'
import { useLanguage, pick } from '../hooks/useLanguage'

const mockupColors = {
  yellow: 'bg-acid',
  pink: 'bg-punch',
  cyan: 'bg-splash',
}

/* Mockup decorativo tipo ventana de navegador, sin imágenes externas */
function BrowserMockup({ color, title, emoji }) {
  return (
    <div
      aria-hidden="true"
      className={`border-b-[3px] border-black ${mockupColors[color]} rounded-t-[7px] p-4 lg:p-3`}
    >
      <div className="flex gap-1.5">
        <span className="size-3 rounded-full border-2 border-black bg-white" />
        <span className="size-3 rounded-full border-2 border-black bg-white" />
        <span className="size-3 rounded-full border-2 border-black bg-white" />
      </div>
      <div className="mt-4 flex h-24 items-center justify-center rounded-lg border-[3px] border-black bg-white text-5xl lg:mt-3 lg:h-20 dark:border-cream dark:bg-surface">
        <span className="float-bounce inline-block">{emoji}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const { language, t } = useLanguage()

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-titulo"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-8 lg:py-6"
    >
      <h2
        id="proyectos-titulo"
        className="font-display text-4xl font-bold sm:text-5xl"
      >
        {t('projects.heading')}
      </h2>
      <p className="mt-3 max-w-lg text-lg">{t('projects.subheading')}</p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => {
          const title = pick(project.title, language)
          const description = pick(project.description, language)
          return (
            <li key={project.id}>
              <Card as="article" interactive className="flex h-full flex-col">
                <BrowserMockup color={project.color} title={title} emoji={project.emoji} />
                <div className="flex grow flex-col p-5 lg:p-4">
                  <h3 className="line-clamp-2 min-h-[3.75rem] font-display text-xl font-bold lg:min-h-[3.5rem]">
                    {title}
                  </h3>
                  <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed lg:mt-1.5">
                    {description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 lg:mt-3">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="white" size="sm">
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-3 pt-5 lg:pt-3">
                    {project.repo && (
                      <a
                        href={project.repo}
                        className="font-bold underline underline-offset-4"
                      >
                        {t('projects.repoLink')}
                        <span className="sr-only">{t('projects.srLinkSuffix', title)}</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="font-bold underline underline-offset-4"
                      >
                        {t('projects.demoLink')}
                        <span className="sr-only">{t('projects.srLinkSuffix', title)}</span>
                      </a>
                    )}
                    {!project.repo && !project.demo && (
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('projects.privateProject')}
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
