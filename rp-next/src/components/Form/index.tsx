'use client'
import React, { HTMLInputTypeAttribute, useState } from 'react'
import styles from './styles.module.scss'

type FormProps = {
  inputs: { label: string; name: string; type: HTMLInputTypeAttribute }[]
  onSubmit: (formData: { [key: string]: string }) => void
}

const Form = ({ inputs, onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            id={input.name}
            name={input.name}
            value={formData[input.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
