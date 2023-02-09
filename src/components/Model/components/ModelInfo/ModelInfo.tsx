// React
import React, { ReactElement } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconClose } from '@consta/icons/IconClose';
import { IconExpand } from '@consta/icons/IconExpand';
import { IconInComparison } from '@consta/icons/IconInComparison';
import { IconLineAndBarChart } from '@consta/icons/IconLineAndBarChart';

// Components
import ModelChart from '../ModelCharts/ModelCharts';

// SCSS
import styles from './ModelInfo.module.scss';

function ModelInfo(): ReactElement {
  return (
    <Layout className={styles.info} direction="column">
      <Layout className={styles.header}>
        <Text className={styles.title} size="s" weight="semibold">
          Тестовые данные
        </Text>
        <Layout className={styles.btnGroup}>
          <Layout className={styles.charts}>
            <Button onlyIcon iconLeft={IconLineAndBarChart} view="secondary" />
            <Button onlyIcon iconLeft={IconInComparison} />
          </Layout>
          <Layout className={styles.actions}>
            <Button onlyIcon iconLeft={IconExpand} view="clear" />
            <Button onlyIcon iconLeft={IconClose} view="clear" />
          </Layout>
        </Layout>
      </Layout>
      <ModelChart />
    </Layout>
  );
}

export default ModelInfo;
