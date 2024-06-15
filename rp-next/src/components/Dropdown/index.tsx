// make a dropdown component that can be used in the header

import React, { useState } from 'react'
import styles from './Dropdown.module.scss'
import cn from 'classnames'

type DropdownProps = {
  children: React.ReactNode
  label: string
}

export const Dropdown = ({ children, label, isOpen }: DropdownProps) => {
  return (
    <dialog className={styles.container}>
      {isOpen && <div className={styles.dropdown}>{children}</div>}
    </dialog>
  )
}
