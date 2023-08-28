export function formatCurrency (amount, currencyFormat = 'MWK') {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyFormat
  })
  return formatter.format(amount)
}
