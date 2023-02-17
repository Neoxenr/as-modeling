// React
import React, { ReactElement, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { ProgressSpin } from '@consta/uikit/ProgressSpin';

// Config names
import { CHART_NAMES } from '../../config/chart/chart-names';

// Store
import { AppDispatch } from '../../store';

// Store slices
import { addData } from '../../store/slices/chart-slice';

// Services
import { useGetParamsQuery } from '../../services/model';

// Components
import ModelHeader from './components/ModelHeader/ModelHeader';
import ModelMainChart from './components/ModelMainChart/ModelMainChart';
import ModelAdditionalChart from './components/ModelAdditionalChart/ModelAdditionalChart';
import ModelSider from './components/ModelSider/ModelSider';
import ModelFooter from './components/ModelFooter/ModelFooter';

// SCSS
import styles from './Model.module.scss';

function Model(): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading } = useGetParamsQuery();

  useEffect(() => {
    if (data) {
      dispatch(addData({ name: CHART_NAMES.MAIN_CHART, data }));

      dispatch(
        addData({ name: CHART_NAMES.ADDITIONAL_CHART, data: [data[0]] })
      );
    }
  }, [data]);

  return isLoading ? (
    <ProgressSpin className={styles.loading} size="2xl" />
  ) : (
    <Layout direction="column">
      <ModelHeader />
      <Layout>
        <Layout flex={4} className={styles.charts} direction="column">
          <ModelMainChart />
          <ModelAdditionalChart />
        </Layout>
        <Layout className={styles.sider} flex={1}>
          <ModelSider />
        </Layout>
      </Layout>
      <ModelFooter />
    </Layout>
  );
}

export default Model;
