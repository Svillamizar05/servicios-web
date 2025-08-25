export function formatCurrency(
  value: number,
  currency: 'USD' | 'COP' = 'USD',
  locale = currency === 'COP' ? 'es-CO' : 'en-US'
) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
