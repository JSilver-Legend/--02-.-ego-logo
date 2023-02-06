import classNames from 'classnames';
import react from 'react';

import styles from './styles.module.scss';

const Text = ({className, children}) => {
  return (
    <p className={classNames(styles.wrapper, className)}>{children}</p>
  )
}

export default Text;