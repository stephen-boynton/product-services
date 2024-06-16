'use client'
import { ProductListItem } from '@/components/ProductListItem'
import styles from './Products.module.scss'
import { Text } from '@/components/Text'
import SearchForm from './_SearchForm'
import { useState } from 'react'
import { createQueryStrings } from '@/lib/createQueryStrings'
import useSWR from 'swr'
import Link from 'next/link'

const handler = (search) =>
  fetch(`http://localhost:5000/products?${search}`).then((res) => res.json())

export default function ProductsPage() {
  const [filters, setFilters] = useState({ limit: 20 })
  const { data } = useSWR(createQueryStrings(filters).join(''), handler, {
    revalidateOnFocus: false
  })

  return (
    <main className={styles.container}>
      <Text as="p" variant="order1">
        Products
      </Text>
      <SearchForm setFilters={setFilters} />
      <ul className={styles.listContainer}>
        {data?.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductListItem product={product} />
          </Link>
        ))}
      </ul>
    </main>
  )
}
