'use server'

type FiltersOptions = {
  query?: string
  sort?: string
  sort_order?: string
  limit?: number
  page?: number
  page_size?: number
}

export async function getProducts(filters: FiltersOptions = {}) {
  const queries = Object.entries(filters).map(
    ([filter, value], i, arr) =>
      `${filter}=${value}${i < arr.length - 1 ? '&' : ''}`
  )

  console.log({ queries })
  const data = await fetch(`http://rp-python:5000/products?${queries.join('')}`)

  if (!data.ok) {
    throw new Error('Failed to fetch products')
  }

  return data.json()
}
