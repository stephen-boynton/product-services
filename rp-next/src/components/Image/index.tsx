import _Image from 'next/image'
import styles from './Image.module.scss'
import cn from 'classnames'

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const Image = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <_Image
      className={cn(styles.container, className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
