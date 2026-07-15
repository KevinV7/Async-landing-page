import Card from './ui/Card'
import Badge from './ui/Badge'
import { projects } from '../data/portfolio'

const mockupColors = {
  yellow: 'bg-acid',
  pink: 'bg-punch',
  cyan: 'bg-splash',
}

/* Mockup decorativo tipo ventana de navegador, sin imágenes externas */
function BrowserMockup({ color, title }) {
  return (
    <div
      aria-hidden="true"
      className={`border-b-[3px] border-black ${mockupColors[color]} rounded-t-[7px] p-4`}
    >
      <div className="flex gap-1.5">
        <span className="size-3 rounded-full border-2 border-black bg-white" />
        <span className="size-3 rounded-full border-2 border-black bg-white" />
        <span className="size-3 rounded-full border-2 border-black bg-white" />
      </div>
      <div className="mt-4 flex h-24 items-center justify-center rounded-lg border-[3px] border-black bg-white font-display text-2xl font-bold">
        {title.slice(0, 2).toUpperCase()}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-titulo"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <h2
        id="proyectos-titulo"
        className="font-display text-4xl font-bold sm:text-5xl"
      >
        Proyectos
      </h2>
      <p className="mt-3 max-w-lg text-lg">
        Una selección de cosas que he construido últimamente.
      </p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.title}>
            <Card as="article" interactive className="flex h-full flex-col">
              <BrowserMockup color={project.color} title={project.title} />
              <div className="flex grow flex-col p-5">
                <h3 className="font-display text-xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="white" size="sm">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3 pt-5">
                  <a
                    href={project.repo}
                    className="font-bold underline underline-offset-4"
                  >
                    Repo ↗
                    <span className="sr-only"> de {project.title}</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="font-bold underline underline-offset-4"
                    >
                      Demo ↗
                      <span className="sr-only"> de {project.title}</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
