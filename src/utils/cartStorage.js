const CART_STORAGE_KEY = 'cartItems'
const CART_UPDATED_EVENT = 'cart-updated'

export const getCartItems = () => {
  try {
    const rawCart = localStorage.getItem(CART_STORAGE_KEY)
    return rawCart ? JSON.parse(rawCart) : []
  } catch {
    return []
  }
}

export const getCartCount = () =>
  getCartItems().reduce((sum, item) => sum + (item.quantity || 0), 0)

export const saveCartItems = (items) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(CART_UPDATED_EVENT))
}

export const onCartUpdated = (listener) => {
  window.addEventListener(CART_UPDATED_EVENT, listener)
  return () => window.removeEventListener(CART_UPDATED_EVENT, listener)
}

