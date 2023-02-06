import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';

import styles from './styles.module.scss';

const Modal = ({
  open,
  setOpen,
  children,
  className
}) => {

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" auto-reopen="true" className={styles.wrapper} onClose={setOpen}>
          <div className={styles.content}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className={styles.translation} />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className={classNames(styles.mainContentWrapper, className)}>
                    {children}
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;
