'use client'
import { Image } from '@/components/Image'
import styles from './page.module.scss'
import { Form } from '@/components/Form'

const MY_INPUTS = [
  { type: 'text', name: 'first name', label: 'first name' },
  { type: 'text', name: 'last name', label: 'last name' },
  { type: 'email', name: 'email', label: 'email' }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my website!</h1>
      <Image
        src="https://dummyimage.com/185x100.png/cc0000/ffffff"
        alt="dummy image"
        width={185}
        height={100}
      />
      <Form inputs={MY_INPUTS} onSubmit={() => {}} />
    </main>
  )
}
