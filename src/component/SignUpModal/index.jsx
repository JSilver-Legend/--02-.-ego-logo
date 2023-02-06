import React from 'react'

import Input from '../Input';
import Modal from '../Modal'
import Text from '../Text';

import {ReactComponent as EmailIcon} from '../../assets/svg/email.svg';
import {ReactComponent as CheckIcon} from '../../assets/svg/check.svg';

import styles from './styles.module.scss';
import ToggleButton from '../ToggleButton';

const SignUpModal = ({open, setOpen}) => {
  return (
    <Modal open={open} setOpen={setOpen} className={styles.signUpModal}>
      <p className={styles.title}>Welcome to Ego</p>
      <Text className={styles.description}>Sign up to join our discord waitlist and learn more about Ego.</Text>
      <Text className={styles.email}>Email</Text>
      <Input EmailIcon={EmailIcon} CheckIcon={CheckIcon} />
      <ToggleButton />
    </Modal>
  )
}

export default SignUpModal