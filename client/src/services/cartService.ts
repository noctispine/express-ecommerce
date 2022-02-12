export const fetchCart = async (token: string) => {
  return fetch('/cart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + JSON.parse(token),
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .catch((err) => {
      console.log(err)
    })
}

export function addToCartPost(
  token: string,
  productId: number,
  quantity: number
) {
  return fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + JSON.parse(token),
    },
    body: JSON.stringify({
      product: productId.toString(),
      quantity: quantity.toString(),
    }),
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err)
    })
}

export function removeFromCartPost(token: string, productId: number) {
  return fetch(`/cart/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + JSON.parse(token),
    },
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err)
    })
}
