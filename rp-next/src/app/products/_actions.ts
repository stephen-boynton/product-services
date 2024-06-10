'use server'

import { Filters, createQueryStrings } from '@/lib/createQueryStrings'

interface FiltersOptions extends Filters {
  query: string
  sort: string
  sort_order: string
  limit: number
  page: number
  page_size: number
}

export async function getProducts(filters: Partial<FiltersOptions> = {}) {
  const queries = createQueryStrings(filters).filter(Boolean)
  const data = await fetch(`http://rp-python:5000/products?${queries.join('')}`)

  if (!data.ok) {
    throw new Error('Failed to fetch products')
  }

  return data.json()
}
