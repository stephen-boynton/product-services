import { Button } from '@/components/Button'
import styles from './Quantity.module.scss'
import { Text } from '../Text'
import cn from 'classnames'
import { FaPlus, FaMinus } from 'react-icons/fa6'

type QuantityProps = {
  quantity: number
  handleIncrement: () => void
  handleDecrement: () => void
  min?: number
  max?: number
  variant?: 'full' | 'compact'
}

export function Quantity({
  quantity = 1,
  handleIncrement,
  handleDecrement,
  min,
  max,
  variant = 'full'
}: QuantityProps) {
  return (
    <div className={cn(styles.container, styles[variant])}>
      <div className={styles.buttonContainer}>
        <Button
          size="extraSmall"
          onClick={handleDecrement}
          icon={<FaMinus />}
          variant="icon"
        />
        <div className={styles.quantity}>
          <Text variant="copy1">{quantity}</Text>
        </div>
        <Button
          size="extraSmall"
          onClick={handleIncrement}
          icon={<FaPlus />}
          variant="icon"
        />
      </div>
    </div>
  )
}
