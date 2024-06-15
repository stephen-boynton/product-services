import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FaStarHalfStroke, FaRegStar } from 'react-icons/fa6'
import cn from 'classnames'
import styles from './StarRating.module.scss'
import { Text } from '../Text'

export type StarRatingProps = {
  count: number
  rating: number
  voteTotal: number
}

export const StarRating = ({ count, rating, voteTotal }: StarRatingProps) => {
  const stars = Array.from({ length: count }, (_, index) => {
    const isFilled = index < rating
    const isHalfFilled = rating % 1 !== 0 && index === Math.floor(rating)
    const isEmpty = index > rating

    if (isEmpty) {
      return <FaRegStar className={styles.empty} key={index} />
    }

    if (isHalfFilled) {
      return <FaStarHalfStroke className={styles.halfFilled} key={index} />
    }

    return (
      <>
        <FaStar
          className={cn({
            [styles.filled]: isFilled,
            [styles.empty]: !isFilled
          })}
          key={index}
        />
      </>
    )
  })

  return (
    <div className={styles.container}>
      {stars}
      <Text marginLeft={'0.5rem'} variant="copy1" as="span">
        {rating}
      </Text>
      <Text marginLeft={'0.5rem'} variant="copy1" as="span">
        ({voteTotal} ratings)
      </Text>
    </div>
  )
}
