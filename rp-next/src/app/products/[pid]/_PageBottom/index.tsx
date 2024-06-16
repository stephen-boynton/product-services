'use client'
import { ReviewBreakdown } from '@/components/ReviewBreakdown'
import styles from './PageBottom.module.scss'
import { Select } from '@/components/Select'
import CustomerReview from '@/components/CustomerReivew'

export const PageBottom = ({ reviews }) => {
  return (
    <div className={styles.pageBottom}>
      <ReviewBreakdown />
      <div className={styles.reviewContainer}>
        <Select
          label="Sort by"
          options={[
            { label: 'rating', value: 'rating' },
            { label: 'date', value: 'date' }
          ]}
          value=""
          onChange={() => {}}
        />
        {reviews.map((review) => (
          <CustomerReview
            key={review.title}
            title={review.title}
            name={review.name}
            date={review.date}
            rating={review.rating}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </div>
  )
}
