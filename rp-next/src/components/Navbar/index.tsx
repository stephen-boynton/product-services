import Link from 'next/link'
import styles from './Navbar.module.scss'
import { ShoppingCartButton } from '../ShoppingCart'

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.aaa}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <ShoppingCartButton />
    </header>
  )
}
