'use client'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import styles from './SearchForm.module.scss'
import { useForm } from 'react-hook-form'
import { Select } from '@/components/Select'
import cn from 'classnames'

export default function SearchForm({ setFilters }) {
  const { register, handleSubmit, formState } = useForm()

  const onSubmit = async (form) => {
    setFilters({ page: 1, ...form })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.flexRow, styles.search)}>
        <Text as="p" variant="order2">
          Search for products
        </Text>
        <Input
          placeholder="Apples, bananas, chicken..."
          {...register('query')}
        />
      </div>
      <div className={styles.flexRow}>
        <Select
          label="Amount per page"
          customStyles={styles.select}
          {...register('page_size')}
          options={[
            { label: '25', value: '25' },
            { label: '50', value: '50' },
            { label: '100', value: '100' }
          ]}
        />
        <Select
          label="Sort by"
          customStyles={styles.select}
          {...register('sort')}
          options={[
            { label: 'Price', value: 'price' },
            { label: 'Name', value: 'name' },
            { label: 'Stock', value: 'stock' },
            { label: 'Sale Discount', value: 'sale_discount' },
            { label: 'Sale Date End', value: 'sale_date_end' }
          ]}
        />
      </div>
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  )
}
