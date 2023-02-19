// React
import React, { ReactElement, ReactNode, useState } from 'react';

// Consta components
import { Modal as ModalConsta } from '@consta/uikit/Modal';
import { Layout } from '@consta/uikit/Layout';

// SCSS
import styles from './Modal.module.scss';

interface ModalProps {
  openButton: ReactNode;
  closeButton?: ReactNode;
  children?: ReactNode | ReactNode[];
  className?: string;
}

function Modal({
  openButton,
  closeButton,
  children,
  className
}: ModalProps): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>{openButton}</div>
      <ModalConsta
        className={`${styles.modal} ${className}`}
        isOpen={isModalOpen}
        onClickOutside={() => setIsModalOpen(false)}
        onEsc={() => setIsModalOpen(false)}
      >
        <Layout className={styles.content} direction="column">
          {children}
          {closeButton && (
            <div onClick={() => setIsModalOpen(false)}>{closeButton}</div>
          )}
        </Layout>
      </ModalConsta>
    </>
  );
}

export default Modal;
