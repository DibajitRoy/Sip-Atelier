export function formatPrice(amount) {
  return `৳${Math.round(amount).toLocaleString('en-BD')}`
}

export function discountedPrice(price, discount) {
  return price * (1 - discount / 100)
}