import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import styles from './Bookmark.module.scss'
import { toast } from 'react-hot-toast'
// create a component that allows you to toggle these bookmark icons on and off

import { useState } from 'react'

export const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const handleClick = () => {
    const newClickValue = isBookmarked ? 'unbookmarked' : 'bookmarked'
    toast(`Item ${newClickValue}`, { duration: 2000 })
    setIsBookmarked(!isBookmarked)
  }

  return (
    <div onClick={handleClick}>
      {isBookmarked ? (
        <FaBookmark className={styles.icon} />
      ) : (
        <FaRegBookmark className={styles.icon} />
      )}
    </div>
  )
}
