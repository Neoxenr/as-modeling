// React
import React, { ReactElement, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Tag } from '@consta/uikit/Tag';
import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconEye } from '@consta/icons/IconEye';
import { IconEyeClose } from '@consta/icons/IconEyeClose';

// Store
import { AppDispatch } from '../../store';

// Store slices
import { setOptions } from '../../store/slices/chart-slice';

// SCSS
import styles from './Parameter.module.scss';

interface ParameterProps {
  label: string;
  group: number;
}

function Parameter({ label, group }: ParameterProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsVisible(!isVisible);

    dispatch(
      setOptions({
        option: ['legend', 'selected'],
        key: label,
        value: isVisible
      })
    );
  };

  return (
    <Layout className={styles.parameter}>
      <Tag
        className={styles.tag}
        mode="info"
        group={(group + 1) as any}
        label={label}
      />
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

export default Parameter;
