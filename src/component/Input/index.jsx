import React from 'react'

import styles from './styles.module.scss';

const Input = ({InputIcon, CheckIcon, content}) => {
  return (
    <div className={styles.wrapper}>
      <InputIcon className={styles.inputIcon} />
      <input className={styles.textField} placeholder={content} />
      <CheckIcon className={styles.CheckIcon} />
    </div>
  )
}

export default Input