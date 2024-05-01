'use client'
import styles from './page.module.css'
import Form from '@/components/Form'

const MY_INPUTS = [
  { type: 'text', name: 'first name', label: 'first name' },
  { type: 'text', name: 'last name', label: 'last name' },
  { type: 'email', name: 'email', label: 'email' }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my website!</h1>
      <Form inputs={MY_INPUTS} onSubmit={() => {}} />
    </main>
  )
}
