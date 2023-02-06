import React, { useState, useEffect } from 'react'

import Input from '../Input';
import Modal from '../Modal'
import Text from '../Text';

import LogoIcon from '../../assets/svg/logo-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as CheckIcon } from '../../assets/svg/check.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/userIcon.svg';

import styles from './styles.module.scss';
import ToggleText from '../ToggleText';

const SignUpModal = ({ open, setOpen }) => {

  const [vtuberActive, setVtuberActive] = useState(false);
  const [customAvatar, setCustomAvatar] = useState(false);
  const [weekActive, setWeekActive] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);

  const onClickBtuberActive = () => {
    setVtuberActive(!vtuberActive);
  }
  
  const onClickCustomAvatar = () => {
    setCustomAvatar(!customAvatar);
  }

  const onClickWeekActive = () => {
    setWeekActive(!weekActive);
  }

  const onClickSubmit = () => {
    setSubmitActive(!submitActive);
  }

  useEffect(() => {
    if(open) { 
      setVtuberActive(false);
      setCustomAvatar(false);
      setWeekActive(false);
      setSubmitActive(false);
    }
  }, [open]);

return (
  <Modal open={open} setOpen={setOpen} className={styles.signUpModal}>
    {
      !submitActive &&
      <>
        <p className={styles.title}>Welcome to Ego</p>
        <Text className={styles.description}>Sign up to join our discord waitlist and learn more about Ego.</Text>
        <Text className={styles.email}>Email</Text>
        <Input InputIcon={EmailIcon} CheckIcon={CheckIcon} content={'Enter your email address'} />
        <ToggleText content={'Are you a vtuber ?'} onClick={onClickBtuberActive} buttonState={vtuberActive} />
        { 
          vtuberActive &&
          <div>
            <p className={styles.wrapper}>Vtuber profiles</p>
            <Input InputIcon={UserIcon} CheckIcon={CheckIcon} content={'Link your Vtuber profile'} />
          </div>
        }
        <ToggleText content={'Would you like custom avatar ?'} onClick={onClickCustomAvatar}></ToggleText>
        {
          customAvatar &&
          <ToggleText content={'Are you willing to stram 10+ hours a week ?'} onClick={onClickWeekActive}></ToggleText>
        }
        <div className={styles.submitBtn}>
          <button className={styles.button} onClick={onClickSubmit}  >
            Submit
          </button>
        </div>
      </>
    }
    {
      submitActive &&
      <>
        <div className={styles.logo}>
          <img src={LogoIcon} width={85} height={92} alt='logo-icon'/>
        </div>
        <Text className={styles.title}>Thank you!</Text>
        <Text className={styles.description}>Looking forward to hearing from us soon!</Text>
        <div className={styles.submitBtn}>
          <button className={styles.button} onClick={()=>{setOpen(false)}}>
            Close
          </button>
        </div>
      </>
    }
    </Modal>
  )
}

export default SignUpModal