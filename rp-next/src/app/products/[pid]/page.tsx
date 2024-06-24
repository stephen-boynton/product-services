import { getProductAndReviews } from '../_actions'
import styles from './styles.module.scss'
import { ItemHero } from './_ItemHero'
import { Text } from '@/components/Text'
import { PageBottom } from './_PageBottom'

type ProductPageProps = {
  params: {
    pid: string
  }
}

export default async function ProductsPage({
  params: { pid }
}: ProductPageProps) {
  const { product, reviews } = await getProductAndReviews(pid)

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
