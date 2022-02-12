import axios from 'axios'
const productsApi = async (filterList: string[] = []) => {
  if (!filterList.length) return await axios.get(`/products`)
  let str: string = '['
  filterList.forEach((category: string) => {
    str += '"' + category + '"'
    str += ','
  })
  str = str.slice(0, -1)

  str += ']'
  console.log(`/products/?filterArr=${str}`)

  return await axios.get(`/products/?filterArr=${str}`)
}

export default productsApi
