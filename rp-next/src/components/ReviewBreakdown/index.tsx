import { PercentageBars } from '../PercentageBars'
import { StarRating } from '../StarRating'
import { Text } from '../Text'
import styles from './ReviewBreakdown.module.scss'

const percents = [
  { label: '5 stars', value: 80 },
  { label: '4 stars', value: 10 },
  { label: '3 stars', value: 5 },
  { label: '2 stars', value: 3 },
  { label: '1 stars', value: 2 }
]

export const ReviewBreakdown = () => {
  return (
    <div className={styles.container}>
      <Text variant="order2" as="p" className={styles.price}>
        Customer Reviews
      </Text>
      <StarRating rating={4.5} count={5} voteTotal={3221} />
      <PercentageBars percentages={percents} />
    </div>
  )
}
