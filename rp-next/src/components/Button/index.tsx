import styles from './Button.module.scss'
import cn from 'classnames'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  onClick: () => void
  variant: 'primary' | 'secondary' | 'icon' | 'text' | 'cta'
  size?: 'extraSmall' | 'small' | 'medium' | 'large'
  icon?: React.ReactNode
}

export const Button = ({
  children,
  variant,
  icon,
  size = 'medium',
  ...buttonProps
}: ButtonProps) => {
  return (
    <button className={cn(styles[variant], styles[size])} {...buttonProps}>
      {icon && variant === 'icon' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
    </button>
  )
}
