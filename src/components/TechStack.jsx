import {
  SiDotnet,
  SiPython,
  SiJavascript,
  SiFastapi,
  SiAnthropic,
  SiDocker,
  SiGithub,
} from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'
import Badge from './ui/Badge'
import { techStack } from '../data/portfolio'

const icons = {
  dotnet: { Icon: SiDotnet, color: 'text-[#512BD4]' },
  python: { Icon: SiPython, color: 'text-[#3776AB]' },
  javascript: { Icon: SiJavascript, color: 'text-[#F7DF1E]' },
  fastapi: { Icon: SiFastapi, color: 'text-[#009688]' },
  sqlserver: { Icon: TbDatabase, color: 'text-[#CC2927]' },
  anthropic: { Icon: SiAnthropic, color: 'text-[#D97757]' },
  docker: { Icon: SiDocker, color: 'text-[#2496ED]' },
  github: { Icon: SiGithub, color: 'text-black' },
}

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-titulo"
      className="min-h-[calc(100vh-5rem)] border-y-[3px] border-black bg-splash"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2
          id="stack-titulo"
          className="font-display text-4xl font-bold text-black sm:text-5xl"
        >
          Stack técnico
        </h2>
        <ul className="mt-8 flex flex-wrap gap-4">
          {techStack.map((tech, index) => {
            const { Icon, color } = icons[tech.icon] ?? {}
            return (
              <li key={tech.name}>
                <Badge variant="white" size="md">
                  {Icon && (
                    <Icon
                      aria-hidden="true"
                      className={`float-bounce inline-block size-4 ${color}`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    />
                  )}
                  {tech.name}
                </Badge>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
