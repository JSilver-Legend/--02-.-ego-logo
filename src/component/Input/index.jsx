import React from 'react'

import styles from './styles.module.scss';

const Input = ({EmailIcon, CheckIcon}) => {
  return (
    <div className={styles.wrapper}>
      <EmailIcon className={styles.emailIcon} />
      <input className={styles.textField} placeholder='Enter your email address' />
      <CheckIcon className={styles.CheckIcon} />
    </div>
  )
}

export default Input