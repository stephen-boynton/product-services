'use client'
import { Image } from '@/components/Image'
import styles from './ItemHero.module.scss'
import cn from 'classnames'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Quantity } from '@/components/Quantity'
import { useState } from 'react'
import { StarRating } from '@/components/StarRating'
import { Bookmark } from '@/components/Bookmark'
import { useDispatch } from 'react-redux'
import { addItem } from '@/store/cart'

export const ItemHero = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispactch = useDispatch()
  const isOnSale = product.isOnSale
  const priceNumber = Number(product.price.replace('$', ''))
  const salePrice = (priceNumber - priceNumber * product.sale_discount).toFixed(
    2
  )

  const handleAddToCart = () => {
    dispactch(
      addItem({
        ...product,
        quantity
      })
    )
  }
  return (
    <div className={styles.container}>
      <Image src={product.image} alt={product.name} width={500} height={400} />
      <div className={styles.actionArea}>
        <div className={styles.titleBlock}>
          <Text variant="copy1" as="h3">
            Purchase Options:
          </Text>
          <Bookmark />
        </div>
        <div className={styles.priceBlock}>
          <Text variant="order1" as="p" className={cn(styles.price)}>
            {isOnSale ? `$${salePrice}` : product.price}
          </Text>
          {isOnSale && (
            <p className={cn({ [styles.strike]: isOnSale })}>
              {' '}
              {product.price}
            </p>
          )}
        </div>
        <p>Stock: {product.stock}</p>
        <StarRating count={5} rating={3.4} voteTotal={437} />
        <div className={styles.actions}>
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            min={1}
            max={product.stock}
          />
          <Button size="medium" onClick={handleAddToCart} variant="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
