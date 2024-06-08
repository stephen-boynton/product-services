import _Image from 'next/image'
import styles from './Image.module.scss'

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

export const Image = ({ src, alt, width, height }: ImageProps) => {
  return (
    <_Image
      className={styles.container}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
