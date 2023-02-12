// React
import React, { ReactElement, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconAdd } from '@consta/icons/IconAdd';
import { IconRemove } from '@consta/icons/IconRemove';
import { IconClose } from '@consta/icons/IconClose';
import { IconExpand } from '@consta/icons/IconExpand';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import { addDataToChart } from '../../../../store/slices/chart-slice';

// Services
import { useGetParamsQuery } from '../../../../services/model';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/names';

// Components
import Chart from '../../../Chart/Chart';

// SCSS
import styles from './ModelAdditionalChart.module.scss';

function ModelAdditionalChart(): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading } = useGetParamsQuery();

  useEffect(() => {
    if (data) {
      dispatch(
        addDataToChart({ name: CHART_NAMES.ADDITIONAL_CHART, data: [data[0]] })
      );
    }
  }, [data]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Layout direction="column" className={styles.chart}>
      <Layout className={styles.header}>
        <Text className={styles.title} size="s" weight="semibold">
          Аномальноя состояние
        </Text>
        <div className={styles.btnGroup}>
          <Layout className={styles.threshold}>
            <Text size="xs" view="secondary">
              Порог нормы threshold:
            </Text>
            <div className={styles.change}>
              <Button onlyIcon iconLeft={IconRemove} view="clear" />
              <Text>0.550</Text>
              <Button onlyIcon iconLeft={IconAdd} view="clear" />
            </div>
            <Button
              className={styles.btn}
              view="ghost"
              label="Оптимизировать"
            />
          </Layout>
          <div className={styles.actions}>
            <Button onlyIcon iconLeft={IconExpand} view="clear" />
            <Button onlyIcon iconLeft={IconClose} view="clear" />
          </div>
        </div>
      </Layout>
      <Chart name={CHART_NAMES.ADDITIONAL_CHART} height={300} />
    </Layout>
  );
}

export default ModelAdditionalChart;
