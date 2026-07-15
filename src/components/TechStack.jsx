import Badge from './ui/Badge'
import { techStack } from '../data/portfolio'

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-titulo"
      className="border-y-[3px] border-black bg-splash"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2
          id="stack-titulo"
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          Stack técnico
        </h2>
        <ul className="mt-8 flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <li key={tech.name}>
              <Badge variant="white" size="md">
                <span aria-hidden="true">{tech.icon}</span>
                {tech.name}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
