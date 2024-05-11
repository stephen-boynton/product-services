'use client'
import React, { HTMLInputTypeAttribute, useState } from 'react'
import styles from './Form.module.scss'
import { Button } from '../Button'
import { Input } from '../Input'

type FormProps = {
  inputs: { label: string; name: string; type: HTMLInputTypeAttribute }[]
  onSubmit: (formData: { [key: string]: string }) => void
}

export const Form = ({ inputs, onSubmit }: FormProps) => {
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
          <Input
            type={input.type}
            id={input.name}
            name={input.name}
            label={input.label}
            value={formData[input.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      <Button
        onClick={() => console.log('sending', formData)}
        variant="primary"
      >
        Submit
      </Button>
    </form>
  )
}
