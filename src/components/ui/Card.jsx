const variants = {
  white: 'bg-white dark:border-cream dark:bg-surface',
  yellow: 'bg-acid',
  pink: 'bg-punch',
  cyan: 'bg-splash',
}

/**
 * Card neobrutalista: borde negro, sombra dura sin blur.
 * Con `interactive` la card se traslada hacia su sombra al hacer hover.
 */
export default function Card({
  variant = 'white',
  interactive = false,
  as: Tag = 'div',
  className = '',
  children,
  ...props
}) {
  const classes = [
    'border-[3px] border-black rounded-brutal shadow-brutal',
    variants[variant],
    interactive &&
      'lift-on-hover transition-[transform,box-shadow] duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-none',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
