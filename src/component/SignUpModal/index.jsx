import React, { useState, useEffect } from 'react';

import Input from '../Input';
import Modal from '../Modal'
import Text from '../Text';

import LogoIcon from '../../assets/svg/logo-icon.svg';
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg';
import { ReactComponent as CheckIcon } from '../../assets/svg/check.svg';
import { ReactComponent as CheckIconTrue } from '../../assets/svg/check-2.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/userIcon.svg';

import styles from './styles.module.scss';
import ToggleText from '../ToggleText';

const SignUpModal = ({ open, setOpen }) => {

  const [vtuberActive, setVtuberActive] = useState(false);
  const [customAvatar, setCustomAvatar] = useState(false);
  const [weekActive, setWeekActive] = useState(false);
  const [pageState, setPageState] = useState(false);
  const [submitActive, setSubmitActive] = useState(false);
  const [isMailInputValidation, setIsMailInputValidation] = useState(false);
  const [isURLInputValidation, setIsURLInputValidation] = useState(false);
  
  useEffect(() => {
    if(open) { 
      setVtuberActive(false);
      setCustomAvatar(false);
      setWeekActive(false);
      setSubmitActive(false);
      setIsMailInputValidation(false);
      setIsURLInputValidation(false);
      setPageState(false);
    }
  }, [open]);

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
    setPageState(!pageState);
  }

  useEffect(() => {
    if(vtuberActive) setSubmitActive(isMailInputValidation&&isURLInputValidation);
    else setSubmitActive(isMailInputValidation);
  }, [isMailInputValidation, isURLInputValidation, vtuberActive])

return (
  <Modal open={open} setOpen={setOpen} className={styles.signUpModal}>
    {
      !pageState &&
      <>
        <p className={styles.title}>Welcome to Ego</p>
        <Text className={styles.description}>Sign up to join our discord waitlist and learn more about Ego.</Text>
        <Text className={styles.email}>Email</Text>
        <Input InputIcon={EmailIcon} setValidation={setIsMailInputValidation} CheckIcon={CheckIcon} CheckIconTrue={CheckIconTrue}  validationType={'e-mail'} content={'Enter your email address'} />
        <ToggleText content={'Are you a vtuber ?'} onClick={onClickBtuberActive} buttonState={vtuberActive} />
        { 
          vtuberActive &&
          <div>
            <p className={styles.wrapper}>Vtuber profiles</p>
            <Input InputIcon={UserIcon} CheckIcon={CheckIcon} setValidation={setIsURLInputValidation} CheckIconTrue={CheckIconTrue} validationType={'url'} content={'Link your Vtuber profile'} />
          </div>
        }
        <ToggleText content={'Would you like custom avatar ?'} onClick={onClickCustomAvatar}></ToggleText>
        {
          customAvatar &&
          <ToggleText content={'Are you willing to stram 10+ hours a week ?'} onClick={onClickWeekActive}></ToggleText>
        }
        <div className={styles.submitBtn}>
          <button className={styles.button} onClick={onClickSubmit} disabled={ submitActive ? false : true}  >
            Submit
          </button>
        </div>
      </>
    }
    {
      pageState &&
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