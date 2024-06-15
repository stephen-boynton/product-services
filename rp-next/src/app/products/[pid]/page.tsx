import { getProduct } from '../_actions'
import styles from './styles.module.scss'
import { ItemHero } from './_ItemHero'
import { Text } from '@/components/Text'

type ProductPageProps = {
  params: {
    pid: string
  }
}

export default async function ProductsPage({
  params: { pid }
}: ProductPageProps) {
  const product = await getProduct(pid)

  return (
    <main className={styles.container}>
      <Text variant="order1" as="h2">
        {product.product}
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
    </main>
  )
}
