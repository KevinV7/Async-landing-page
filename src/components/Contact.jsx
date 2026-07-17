import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from './ui/Button'
import Card from './ui/Card'
import Badge from './ui/Badge'
import { TikTokIcon, LinkedInIcon, GitHubIcon } from './ui/Icons'
import { profile } from '../data/portfolio'

const inputClasses =
  'w-full rounded-brutal border-[3px] border-black bg-white px-4 py-3 text-black shadow-brutal placeholder:text-neutral-600 dark:border-cream dark:bg-surface dark:text-cream dark:placeholder:text-neutral-400'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="mx-auto max-w-6xl px-4 py-9 sm:px-6 md:py-7"
    >
      <h2
        id="contacto-titulo"
        className="font-display text-4xl font-bold sm:text-5xl"
      >
        ¿Listo para tu proyecto?
      </h2>
      <p className="mt-5 max-w-lg text-lg align:10">
          Cuéntame qué necesitas y te respondo en menos de 24 horas.
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
            <Button
              type="submit"
              variant="pink"
              size="lg"
              className="justify-self-start disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje ✉️'}
            </Button>
            {status === 'success' && (
              <p role="status" className="font-bold text-green-700 dark:text-green-400">
                ¡Mensaje enviado! Te responderé pronto.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="font-bold text-red-700 dark:text-red-400">
                No se pudo enviar. Intenta de nuevo o escríbeme a {profile.email}.
              </p>
            )}
          </form>
        </Card>

        <Card variant="yellow" className="h-fit p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold text-black">
            También me encuentras en
          </h3>
          <div className="mt-6 flex flex-col items-start gap-4">
            <Badge href={profile.github} variant="white">
              <GitHubIcon /> GitHub
            </Badge>
            <Badge href={profile.linkedin} variant="white">
              <LinkedInIcon /> LinkedIn
            </Badge>
            <Badge href={profile.tiktok} variant="white">
              <TikTokIcon /> TikTok
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  )
}
