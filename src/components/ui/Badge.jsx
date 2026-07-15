const variants = {
  yellow: 'bg-acid',
  pink: 'bg-punch',
  cyan: 'bg-splash',
  white: 'bg-white',
}

const sizes = {
  sm: 'px-2.5 py-1 text-xs border-2 shadow-[2px_2px_0_0_#000]',
  md: 'px-4 py-2 text-sm border-2 shadow-brutal',
}

/**
 * Badge/chip neobrutalista con borde negro y sombra dura propia.
 * Con `href` se convierte en enlace (p. ej. GitHub / LinkedIn / CV).
 */
export default function Badge({
  variant = 'white',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) {
  const Tag = href ? 'a' : 'span'
  const classes = [
    'inline-flex items-center gap-2 rounded-lg border-black',
    'font-semibold text-black',
    variants[variant],
    sizes[size],
    href &&
      'press-effect transition-[transform,box-shadow] duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-brutal-none hover:bg-acid',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag href={href} className={classes} {...props}>
      {children}
    </Tag>
  )
}
