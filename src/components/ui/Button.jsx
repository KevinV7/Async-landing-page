const variants = {
  yellow: 'bg-acid',
  pink: 'bg-punch',
  cyan: 'bg-splash',
  white: 'bg-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-4 text-lg',
}

/**
 * Botón neobrutalista: borde negro grueso, sombra dura y efecto
 * "se hunde en su sombra" al pulsar. Con `href` se renderiza como enlace.
 */
export default function Button({
  variant = 'yellow',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) {
  const Tag = href ? 'a' : 'button'
  const classes = [
    'press-effect inline-flex items-center justify-center gap-2',
    'font-display font-bold text-black',
    'border-[3px] border-black rounded-brutal shadow-brutal',
    'transition-[transform,box-shadow] duration-100',
    'active:translate-x-1 active:translate-y-1 active:shadow-brutal-none',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  return (
    <Tag href={href} className={classes} {...props}>
      {children}
    </Tag>
  )
}
