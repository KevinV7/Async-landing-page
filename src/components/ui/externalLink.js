/**
 * Un enlace es externo cuando apunta a otro sitio (http/https). Los internos
 * (`#seccion`, el CV que se descarga, `mailto:`) se quedan en la pestaña
 * actual: abrir un mailto en pestaña nueva deja una pestaña en blanco.
 */
export function isExternalHref(href) {
  return typeof href === 'string' && /^https?:\/\//i.test(href)
}

/**
 * Props que abren el enlace en otra pestaña sin perder la página actual.
 * `noopener` evita que el sitio destino pueda manipular esta pestaña vía
 * `window.opener`. Devuelve `null` para enlaces internos, que no la necesitan.
 */
export function externalLinkProps(href) {
  return isExternalHref(href) ? { target: '_blank', rel: 'noopener noreferrer' } : null
}
