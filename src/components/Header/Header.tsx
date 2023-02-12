// React
import React, { ReactElement } from 'react';

// Consta components
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { Layout } from '@consta/uikit/Layout';

// Consta icons
import { IconRing } from '@consta/icons/IconRing';

// SCSS
import styles from './Header.module.scss';

function Header(): ReactElement {
  return (
    <Layout className={styles.header}>
      <Text className={styles.title} size="xl" weight="bold">
        Моделирование
      </Text>
      <Layout className={styles.info}>
        <Text weight="semibold" size="s" className={styles.username}>
          Христорождественский А.А.
        </Text>
        <Button onlyIcon iconLeft={IconRing} view="clear" />
      </Layout>
    </Layout>
  );
}

export default Header;
