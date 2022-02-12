import cartReducer, { addToCart, initialState } from '../cartReducer'

test('should handle a product being added to empty cart', () => {
  const newProduct = {
    id: 1,
    title: 'Pen',
    price: 3,
    description: 'a pen',
    category: 'Pen',
    image: '-',
    quantity: 1,
  }

  const newState = cartReducer(initialState, addToCart(newProduct))
  expect(newState).toEqual({
    products: [newProduct],
    total: newProduct.price,
  })
})

test('should handle a product being added to cart which has same product', () => {
  const initialProduct = {
    id: 1,
    title: 'Pen',
    price: 6,
    description: 'a pen',
    category: 'Pen',
    image: '-',
    quantity: 2,
  }
  const newProduct = {
    id: 1,
    title: 'Pen',
    price: 3,
    description: 'a pen',
    category: 'Pen',
    image: '-',
    quantity: 1,
  }
  const initialState = {
    products: [initialProduct],
    total: initialProduct.price,
  }
  const initialQuantity = initialProduct.quantity
  const initialTotal = initialState.total

  const newState = cartReducer(initialState, addToCart(newProduct))
  expect(newState).toEqual({
    products: [{ ...initialProduct, quantity: initialQuantity + 1 }],
    total: initialTotal + newProduct.price,
  })
})
