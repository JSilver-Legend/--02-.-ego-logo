import React, { useState } from 'react';
import validator from 'validator';

import styles from './styles.module.scss';

const Input = ({InputIcon, CheckIcon, CheckIconTrue, content, validationType, setValidation}) => {

  const [ isValidation, setIsValidation ] = useState(false);

  const validate = (e) => {
    if( validationType === 'e-mail') {
      if (validator.isEmail(e.target.value)) {
        setIsValidation(true);
        setValidation(true);
      } else {
        setIsValidation(false);
        setValidation(false);
      }
    } else if( validationType === 'url') {
      if (validator.isURL(e.target.value)) {
        setIsValidation(true);
        setValidation(true);
      } else {
        setIsValidation(false);
        setValidation(false);
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <InputIcon className={styles.inputIcon} />
      <input className={styles.textField} onChange={(e) => validate(e)} placeholder={content} />
      { !isValidation ? <CheckIcon className={styles.CheckIcon} /> : <CheckIconTrue className={styles.CheckIcon} /> }
    </div>
  )
}

export default Input