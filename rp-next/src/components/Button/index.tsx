import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  variant: 'primary' | 'secondary'
}

export const Button = ({ children, variant, ...buttonProps }: ButtonProps) => {
  return (
    <button className={styles[variant]} {...buttonProps}>
      {children}
    </button>
  )
}
