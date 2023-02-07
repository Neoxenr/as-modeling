import React, { ReactElement } from 'react';

import { Button } from '@consta/uikit/Button';
import { IconRing } from '@consta/icons/IconRing';

import styles from './Header.module.scss';

function Header(): ReactElement {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Моделирование</h1>
      <div className={styles.info}>
        <p className={styles.username}>Христорождественский А.А.</p>
        <Button onlyIcon iconLeft={IconRing} view="clear" />
      </div>
    </div>
  );
}

export default Header;
