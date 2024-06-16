import styles from './ShoppingCartItem.module.scss'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Quantity } from '@/components/Quantity'
import { Image } from '@/components/Image'
import { CartItem } from '@/store/cart'

type ShoppingCartItemProps = {
  item: CartItem
  quantity: number
  handlers: {
    handleRemove: (id: string) => void
    handleIncrement: (id: string) => void
    handleDecrement: (id: string) => void
  }
}

export const ShoppingCartItem = ({
  item,
  quantity,
  handlers
}: ShoppingCartItemProps) => {
  return (
    <li key={item.id} className={styles.container}>
      <Image
        className={styles.image}
        src={item.image_url}
        alt={item.name}
        width={85}
        height={85}
      />
      <div className={styles.details}>
        <Text variant="order3" as="p" className={styles.title}>
          {item.name}
        </Text>
        <Text variant="copy2" as="p" className={styles.price}>
          {item.price}
        </Text>
      </div>
      <div className={styles.actions}>
        <Button
          variant="text"
          size="small"
          onClick={() => handlers.handleRemove(item.id)}
        >
          Remove
        </Button>
        <Quantity
          variant="compact"
          handleDecrement={() => handlers.handleDecrement(item.id)}
          handleIncrement={() => handlers.handleIncrement(item.id)}
          quantity={quantity}
        />
      </div>
    </li>
  )
}
