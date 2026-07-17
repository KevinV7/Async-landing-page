import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Button from './ui/Button'
import Card from './ui/Card'
import Badge from './ui/Badge'
import { TikTokIcon, LinkedInIcon, GitHubIcon } from './ui/Icons'
import { profile } from '../data/portfolio'
import { useLanguage } from '../hooks/useLanguage'

const inputClasses =
  'w-full rounded-brutal border-[3px] border-black bg-white px-4 py-2.5 text-black shadow-brutal placeholder:text-neutral-600 dark:border-cream dark:bg-surface dark:text-cream dark:placeholder:text-neutral-400'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const MAX_LENGTHS = { name: 100, email: 254, message: 2000 }
const MIN_RESEND_INTERVAL_MS = 30_000

// EmailJS forwards these as opaque template variables, never as raw email
// headers, but we still strip line breaks so a crafted value can't be used
// to smuggle extra header-like content into whatever the template renders.
function sanitizeField(value, maxLength) {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, maxLength)
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error | cooldown
  const lastSentAtRef = useRef(0)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    // Honeypot: real visitors never fill this hidden field, bots usually do.
    if (form.company) {
      setStatus('success')
      setForm({ name: '', email: '', message: '', company: '' })
      return
    }

    const sinceLastSend = Date.now() - lastSentAtRef.current
    if (sinceLastSend < MIN_RESEND_INTERVAL_MS) {
      setStatus('cooldown')
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: sanitizeField(form.name, MAX_LENGTHS.name),
          from_email: sanitizeField(form.email, MAX_LENGTHS.email),
          message: sanitizeField(form.message, MAX_LENGTHS.message),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      lastSentAtRef.current = Date.now()
      setStatus('success')
      setForm({ name: '', email: '', message: '', company: '' })
    } catch (error) {
      console.error('Error al enviar el mensaje:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:py-6"
    >
      <h2
        id="contacto-titulo"
        className="font-display text-4xl font-bold sm:text-5xl"
      >
        {t('contact.heading')}
      </h2>
      <p className="mt-3 max-w-lg text-lg">
          {t('contact.subheading')}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-[3fr_2fr] md:gap-8">
        <Card variant="white" className="p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="company">{t('contact.honeypotLabel')}</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="nombre" className="mb-1 block font-bold">
                {t('contact.nameLabel')}
              </label>
              <input
                id="nombre"
                name="name"
                type="text"
                required
                maxLength={MAX_LENGTHS.name}
                autoComplete="name"
                placeholder={t('contact.namePlaceholder')}
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-bold">
                {t('contact.emailLabel')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={MAX_LENGTHS.email}
                autoComplete="email"
                placeholder={t('contact.emailPlaceholder')}
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-1 block font-bold">
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="mensaje"
                name="message"
                required
                rows={4}
                maxLength={MAX_LENGTHS.message}
                placeholder={t('contact.messagePlaceholder')}
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
              {status === 'sending' ? t('contact.sending') : t('contact.sendButton')}
            </Button>
            {status === 'success' && (
              <p role="status" className="font-bold text-green-700 dark:text-green-400">
                {t('contact.success')}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="font-bold text-red-700 dark:text-red-400">
                {t('contact.error', profile.email)}
              </p>
            )}
            {status === 'cooldown' && (
              <p role="alert" className="font-bold text-red-700 dark:text-red-400">
                {t('contact.cooldown')}
              </p>
            )}
          </form>
        </Card>

        <Card variant="yellow" className="h-fit p-5 sm:p-6">
          <h3 className="font-display text-2xl font-bold text-black">
            {t('contact.alsoFindMe')}
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
