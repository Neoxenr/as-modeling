// React
import React, { ReactElement, ReactNode, useState } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconEye } from '@consta/icons/IconEye';
import { IconEyeClose } from '@consta/icons/IconEyeClose';

// SCSS
import styles from './Visible.module.scss';

interface VisibleProps {
  callback: (isVisible: boolean) => void;
  children: ReactNode | ReactNode[];
}

function Visible({ callback, children }: VisibleProps): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnClick = (): void => {
    setIsVisible(!isVisible);

    callback(isVisible);
  };

  return (
    <Layout className={styles.visible}>
      {children}
      <Button
        size="s"
        view="clear"
        onlyIcon
        iconLeft={isVisible ? IconEyeClose : IconEye}
        onClick={handleOnClick}
      />
    </Layout>
  );
}

export default Visible;
