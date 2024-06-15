'use client'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import styles from './ShoppingCart.module.scss'
import { Text } from '../Text'
import { Button } from '../Button'
import { useState } from 'react'
import { ShoppingCartItem } from './ShoppingCarrtItem'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { decrement, increment, removeItem } from '@/store/cart'

export const ShoppingCart = ({ isOpen, onClose }) => {
  const cart = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  const handleIncrement = (id) => {
    dispatch(increment(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrement(id))
  }

  const handlers = {
    handleRemove,
    handleIncrement,
    handleDecrement
  }

  return (
    <Drawer
      open={isOpen}
      direction="right"
      className={styles.drawer}
      onClose={onClose}
      size={450}
    >
      <div className={styles.container}>
        <Text variant="order1" as="p" className={styles.price}>
          Cart
        </Text>
        <ul className={styles.list}>
          {cart?.items.map((item) => (
            <ShoppingCartItem
              key={item.product}
              item={item}
              quantity={item.quantity}
              handlers={handlers}
            />
          ))}
        </ul>
      </div>
    </Drawer>
  )
}

export const ShoppingCartButton = () => {
  const cart = useSelector((state: RootState) => state.cart)
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div data- className={styles.cartButton}>
      <Button
        onClick={handleClick}
        variant="icon"
        size="small"
        icon={<FaShoppingCart />}
        aria-label="Shopping cart"
      >
        <span className={styles.count}>{cart?.items.length}</span>
      </Button>
      <ShoppingCart isOpen={isOpen} onClose={handleClick} />
    </div>
  )
}
