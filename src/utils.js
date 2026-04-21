export function formatPrice(p) {
  const n = parseFloat(p)
  if (!n || n <= 0) return ''
  return `$${n.toFixed(2)}`
}

export function priceValue(p) {
  const n = parseFloat(p)
  return n > 0 ? n : 0
}
