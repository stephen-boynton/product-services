// CustomerReview.tsx
import React from 'react'
import styles from './CustomerReview.module.scss'
import { StarRating } from '../StarRating'
import { Text } from '../Text'

type CustomerReviewProps = {
  name: string
  rating: number
  title: string
  date: string
  size: string
  purchaseType: string
  reviewText: string
  onHelpfulClick: () => void
}

const CustomerReview: React.FC<CustomerReviewProps> = ({
  name,
  rating,
  title,
  date,
  size,
  purchaseType,
  reviewText,
  onHelpfulClick
}) => {
  return (
    <div className={styles.reviewBox}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewAvatar}>{/* Avatar can go here */}</div>
        <div className={styles.nameAndRating}>
          <Text variant="copy1" className={styles.reviewName}>
            {name}
          </Text>
          <div className={styles.reviewInfo}>
            <StarRating
              useLabels={false}
              rating={rating}
              count={5}
              voteTotal={2309}
            />
          </div>
        </div>
      </div>
      <div className={styles.reviewContent}>
        <h3 className={styles.reviewTitle}>{title}</h3>
        <Text variant="copy1" className={styles.rviewDate}>
          {date}
        </Text>
        <Text variant="copy1" className={styles.reviewText}>
          {reviewText}
        </Text>
      </div>
    </div>
  )
}

export default CustomerReview
