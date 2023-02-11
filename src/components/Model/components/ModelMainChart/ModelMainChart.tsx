// React
import React, { ReactElement, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconClose } from '@consta/icons/IconClose';
import { IconExpand } from '@consta/icons/IconExpand';
import { IconInComparison } from '@consta/icons/IconInComparison';
import { IconLineAndBarChart } from '@consta/icons/IconLineAndBarChart';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import { addDataToChart } from '../../../../store/slices/chart-slice';

// Services
import { useGetParamsQuery } from '../../../../services/model';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/names';

// Components
import ModelTags from '../ModelTags/ModelTags';
import Chart from '../../../Chart/Chart';

// Types
import { Parameter } from '../../../../types/parameter';

// SCSS
import styles from './ModelMainChart.module.scss';

function ModelMainChart(): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading } = useGetParamsQuery();

  useEffect(() => {
    if (data) {
      dispatch(addDataToChart({ name: CHART_NAMES.MAIN_CHART, data }));
    }
  }, [data]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Layout direction="column" className={styles.chart}>
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
      <ModelTags tags={data?.map((param: Parameter) => param.description)} />
      <Chart name={CHART_NAMES.MAIN_CHART} height={400} />
    </Layout>
  );
}

export default ModelMainChart;
