import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Echarts
import ReactEcharts from 'echarts-for-react';

// Store
import { RootState } from '../../store';

// Types
import { Options } from '../../types/options';

interface ChartProps {
  height: number;
}

function Chart({ height }: ChartProps): ReactElement {
  const options: Options = useSelector((state: RootState) => state.chartConfig);

  return (
    <ReactEcharts
      style={{ height: `${height}px` }}
      opts={{ renderer: 'svg' }}
      option={options}
    />
  );
}

export default Chart;
