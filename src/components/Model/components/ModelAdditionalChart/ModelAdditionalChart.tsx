// React
import React, { ReactElement, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';

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
    <Layout direction="column">
      <div>HEADER</div>
      <Chart name={CHART_NAMES.ADDITIONAL_CHART} height={300} />
    </Layout>
  );
}

export default ModelAdditionalChart;
