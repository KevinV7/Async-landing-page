import { experience } from '../data/portfolio'
import { useLanguage, pick } from '../hooks/useLanguage'

export default function Experience() {
  const { language, t } = useLanguage()

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-titulo"
      className="border-y-[3px] border-black bg-white transition-colors duration-300 dark:border-cream dark:bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:py-9">
        <h2
          id="experiencia-titulo"
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          {t('experience.heading')}
        </h2>

        <ol className="mt-10 max-w-3xl">
          {experience.map((job) => (
            <li
              key={job.company}
              className="border-b-[3px] border-black py-6 first:pt-0 last:border-b-0 last:pb-0 dark:border-cream/30"
            >
              <p className="font-mono text-sm font-semibold">{pick(job.period, language)}</p>
              <h3 className="mt-1 font-display text-2xl font-bold">
                {pick(job.role, language)}{' '}
                <span className="font-body text-lg font-semibold">
                  · {job.company}
                </span>
              </h3>
              <p className="mt-2 leading-relaxed">{pick(job.summary, language)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
