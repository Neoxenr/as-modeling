// React
import React, { ReactElement, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import { addData } from '../../../../store/slices/chart-slice';

// Services
import { useGetParamsQuery } from '../../../../services/model';

// Types
import { Parameter } from '../../../../types/chart/parameter';

// Components
import ModelTags from '../ModelTags/ModelTags';
import Chart from '../../../Chart/Chart';

function ModelChart(): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading } = useGetParamsQuery();

  useEffect(() => {
    if (data) {
      dispatch(addData(data));
    }
  }, [data]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Layout direction="column">
      <ModelTags tags={data?.map((param: Parameter) => param.description)} />
      <Chart />
    </Layout>
  );
}

export default ModelChart;
