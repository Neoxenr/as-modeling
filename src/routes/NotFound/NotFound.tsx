// React
import React, { ReactElement } from 'react';

// React router
import { useNavigate, NavigateFunction } from 'react-router-dom';

// Consta components
import { Button } from '@consta/uikit/Button';
import { Responses404 } from '@consta/uikit/Responses404';

// SCSS
import styles from './NotFound.module.scss';

function NotFound(): ReactElement {
  const navigate: NavigateFunction = useNavigate();

  const handleOnClick = (): void => {
    navigate(-1);
  };

  return (
    <Responses404
      className={styles.response}
      actions={
        <Button
          size="m"
          view="ghost"
          label="Вернуться назад"
          onClick={handleOnClick}
        />
      }
    />
  );
}

export default NotFound;
