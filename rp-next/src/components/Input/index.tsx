import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary'
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'primary', ...props }, ref) => {
    return (
      <div className={styles[variant]}>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        <input ref={ref} {...props} />
      </div>
    )
  }
)

Input.displayName = 'Input'
