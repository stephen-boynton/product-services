'use client'
import { ReviewBreakdown } from '@/components/ReviewBreakdown'
import styles from './PageBottom.module.scss'
import { Select } from '@/components/Select'
import CustomerReview from '@/components/CustomerReivew'
import { Review } from '@/types/product'

export const PageBottom = ({ reviews }: { reviews: Review[] }) => (
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
          title={'Bad Mojo'}
          name={'John Doe'}
          date={review.created_at}
          rating={review.rating}
          reviewText={review.review}
          purchaseType="Verified Purchase"
          onHelpfulClick={() => {}}
          size="small"
        />
      ))}
    </div>
  </div>
)
