import React from 'react'

import Text from '../Text';
import styles from './styles.module.scss';

const ToggleText = ({content, onClick, buttonState}) => {

  const setToggleState = () => {
    onClick();
  }

  return (
    <div className={styles.wrapper}>
      <Text>{content}</Text>
      <label className={styles.label}>
          <input className={styles.input} type="checkbox" defaultChecked={buttonState} onClick={setToggleState} />
          <span className={styles.span} />
      </label>
    </div>
  )
}

export default ToggleText