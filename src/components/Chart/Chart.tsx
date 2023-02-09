import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Echarts
import ReactEcharts from 'echarts-for-react';

// Store
import { RootState } from '../../store';

// Types
import { Options } from '../../types/chart/options';

function Chart(): ReactElement {
  const options: Options = useSelector((state: RootState) => state.chartConfig);

  return <ReactEcharts opts={{ renderer: 'svg' }} option={options} />;
}

export default Chart;
