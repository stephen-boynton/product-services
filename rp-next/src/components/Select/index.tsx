import React from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'

type SelectProps = {
  options: { label: string; value: string }[]
  label: string
  value: string
  customStyles: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<SelectProps> = React.forwardRef(
  ({ options, label, value, customStyles = '', onChange, ...props }, ref) => {
    console.log({ options, label, value, customStyles, onChange, props })
    return (
      <div className={cn([styles.container, customStyles])}>
        <label className={styles.label}>{label}</label>
        <select
          value={value}
          onChange={onChange}
          className={styles.select}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

Select.displayName = 'Select'
