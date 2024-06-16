import { getProduct } from '../_actions'
import styles from './styles.module.scss'
import { ItemHero } from './_ItemHero'
import { Text } from '@/components/Text'
import { Product } from '@/types/product'
import { ReviewBreakdown } from '@/components/ReviewBreakdown'
import CustomerReview from '@/components/CustomerReivew'
import { Select } from '@/components/Select'
import { PageBottom } from './_PageBottom'

type ProductPageProps = {
  params: {
    pid: string
  }
}

const getReviews = (pid: string) => {
  return Array.from({ length: 5 }, (_, index) => ({
    title: `Review ${index + 1}`,
    name: 'John Doe',
    date: '2021-01-01',
    rating: 4.5,
    reviewText: review
  }))
}

const review =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default async function ProductsPage({
  params: { pid }
}: ProductPageProps) {
  const product: Product = await getProduct(pid)
  const reviews = getReviews(pid)

  return (
    <main className={styles.container}>
      <Text variant="order1" as="h2">
        {product.name}
      </Text>
      <section className={styles.pageTop}>
        <ItemHero product={product} />
      </section>
      <section className={styles.pageBody}>
        <Text variant="order2" as="h3">
          Description:
        </Text>
        <p>{product.description}</p>
      </section>
      <hr className={styles.hr} />
      <PageBottom reviews={reviews} />
    </main>
  )
}
