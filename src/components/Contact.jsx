import { useState } from 'react'
import Button from './ui/Button'
import Card from './ui/Card'
import Badge from './ui/Badge'
import { profile } from '../data/portfolio'

const inputClasses =
  'w-full rounded-brutal border-[3px] border-black bg-white px-4 py-3 shadow-brutal placeholder:text-neutral-600'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
    >
      <h2
        id="contacto-titulo"
        className="font-display text-4xl font-bold sm:text-5xl"
      >
        ¿Hablamos?
      </h2>
      <p className="mt-3 max-w-lg text-lg">
        Cuéntame sobre tu proyecto o simplemente saluda. Respondo rápido.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[3fr_2fr]">
        <Card variant="white" className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label htmlFor="nombre" className="mb-2 block font-bold">
                Nombre
              </label>
              <input
                id="nombre"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-2 block font-bold">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="message"
                required
                rows={5}
                placeholder="¿En qué puedo ayudarte?"
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
              />
            </div>
            <Button type="submit" variant="pink" size="lg" className="justify-self-start">
              Enviar mensaje ✉️
            </Button>
          </form>
        </Card>

        <Card variant="yellow" className="h-fit p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold">
            También me encuentras en
          </h3>
          <div className="mt-6 flex flex-col items-start gap-4">
            <Badge href={`mailto:${profile.email}`} variant="white">
              ✉️ {profile.email}
            </Badge>
            <Badge href={profile.linkedin} variant="white">
              💼 LinkedIn
            </Badge>
            <Badge href={profile.github} variant="white">
              🐙 GitHub
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  )
}
