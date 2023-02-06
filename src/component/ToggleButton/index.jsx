import React from 'react'

import Text from '../Text';

import styles from './styles.module.scss';

const ToggleButton = () => {
  return (
    <div className={styles.wrapper}>
      <Text>Are you a btuber?</Text>
      <input className={styles.toggle} type='checkbox' />
    </div>
  )
}

export default ToggleButton