import { ReactNode } from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  children: ReactNode
  variant:
    | 'display'
    | 'order1'
    | 'order2'
    | 'order3'
    | 'copy1'
    | 'copy2'
    | 'copy3'
  className?: string
  margin?: string
  padding?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  marginBottom?: string
}

export function Text({
  as = 'p',
  children,
  variant,
  className,
  margin,
  padding,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom
}: TextProps) {
  const Component = as
  return (
    <Component
      className={cn(styles[variant], className)}
      style={{
        margin,
        padding,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom
      }}
    >
      {children}
    </Component>
  )
}
