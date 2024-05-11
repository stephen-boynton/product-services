import styles from './Text.module.scss'

type TextProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  children: string
  variant: 'display' | 'order1' | 'order2' | 'copy1' | 'copy2' | 'copy3'
}

export function Text({ as = 'p', children, variant }: TextProps) {
  const Component = as
  return <Component className={styles[variant]}>{children}</Component>
}
