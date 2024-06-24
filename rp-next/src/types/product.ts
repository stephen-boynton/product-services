export type Product = {
  description: string
  id: string
  image_url: string
  is_on_sale: boolean
  price: number
  name: string
  sale_discount: number
  sale_end_date: string
  stock: number
}

export type Review = {
  id: string
  user_id: string
  updated_at: string
  created_at: string
  rating: number
  review: string
  title: string
}

export type SearchFilters = {
  query: string
  sort: string
  sort_order: string
  limit: number
  page: number
  page_size: number
}
