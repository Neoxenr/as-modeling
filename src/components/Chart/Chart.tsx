// React
import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Echarts
import ReactEcharts from 'echarts-for-react';

// Types
import { Options } from '../../types/chart/options';

// Store
import { RootState } from '../../store';

interface ChartProps {
  name: string;
  height: number;
}

function Chart({ name, height }: ChartProps): ReactElement {
  const options: Options = useSelector(
    (state: RootState) => state.chartsConfig[name]
  );

  return (
    <ReactEcharts
      style={{ height: `${height}px` }}
      opts={{ renderer: 'svg' }}
      option={options}
    />
  );
}

export default Chart;
