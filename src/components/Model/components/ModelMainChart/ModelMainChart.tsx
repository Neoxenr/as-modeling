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

// Services
import { useGetParamsQuery } from '../../../../services/model';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/chart-names';

// Components
import ModelTags from '../ModelTags/ModelTags';
import Chart from '../../../Chart/Chart';

// Types
import { Parameter } from '../../../../types/chart/parameter';

// SCSS
import styles from './ModelMainChart.module.scss';

function ModelMainChart(): ReactElement {
  const { data } = useGetParamsQuery();

  return (
    <Layout direction="column" className={styles.chart}>
      <Layout className={styles.header}>
        <Text className={styles.title} size="s" weight="semibold">
          Тестовые данные
        </Text>
        <Layout className={styles.btnGroup}>
          <div className={styles.charts}>
            <Button onlyIcon iconLeft={IconLineAndBarChart} view="ghost" />
            <Button onlyIcon iconLeft={IconInComparison} view="ghost" />
          </div>
          <div className={styles.actions}>
            <Button onlyIcon iconLeft={IconExpand} view="clear" />
            <Button onlyIcon iconLeft={IconClose} view="clear" />
          </div>
        </Layout>
      </Layout>
      <ModelTags tags={data?.map((param: Parameter) => param.description)} />
      <Chart
        className={styles.echart}
        name={CHART_NAMES.MAIN_CHART}
        height={400}
      />
    </Layout>
  );
}

export default ModelMainChart;
