import { Product } from '@/types/product'
import { Image } from '../Image'
import styles from './Product.module.scss'
import cn from 'classnames'

const truncate = (text: string, length: number) => {
  return text.length > length ? `${text.substring(0, length)}...` : text
}

const parsePrice = (price: string) => Number(price.split('$')[1])

export const ProductListItem = ({ product }: { product: Product }) => {
  const hasSale = product.isOnSale
  const parsedPrice = parsePrice(product.price)
  const salePrice = parsedPrice - parsedPrice * (product.sale_discount / 100)
  return (
    <li className={styles.container}>
      <Image
        src={product.image}
        alt={product.description}
        width={100}
        height={100}
      />
      <div>
        <h2>{product.product}</h2>
        <p
          className={cn(styles.price, { [styles.sale]: hasSale })}
        >{`${product.price}`}</p>
        {hasSale && (
          <p className={styles.salePrice}>{`Sale Price: $${salePrice.toFixed(
            2
          )}`}</p>
        )}
        <p>{truncate(product.description, 110)}</p>
      </div>
    </li>
  )
}
