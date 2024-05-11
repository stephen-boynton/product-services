import styles from './Button.module.scss'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  variant: 'primary' | 'secondary'
}

export const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  )
}