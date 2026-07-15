import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-titulo"
      className="border-y-[3px] border-black bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2
          id="experiencia-titulo"
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          Experiencia
        </h2>

        <ol className="mt-10 max-w-3xl">
          {experience.map((job) => (
            <li
              key={job.period}
              className="border-b-[3px] border-black py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <p className="font-mono text-sm font-semibold">{job.period}</p>
              <h3 className="mt-1 font-display text-2xl font-bold">
                {job.role}{' '}
                <span className="font-body text-lg font-semibold">
                  · {job.company}
                </span>
              </h3>
              <p className="mt-2 leading-relaxed">{job.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
