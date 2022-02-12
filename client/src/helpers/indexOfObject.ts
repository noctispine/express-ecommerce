import { ICartItem } from '../types/stateTypes/cartStateTypes'

const indexOfObject = (array: ICartItem[], item: ICartItem): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) if (array[i].id === item.id) return i
  }
  return -1
}
export default indexOfObject
