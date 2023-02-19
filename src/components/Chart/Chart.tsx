// React
import React, { ReactElement } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Echarts
import ReactEcharts from 'echarts-for-react';

// Store
import { RootState } from '../../store';

// Types
import { Options } from '../../types/chart/options';

interface ChartProps {
  name: string;
  height: number;
  className?: string;
}

function Chart({ name, height, className }: ChartProps): ReactElement {
  const options: Options = useSelector(
    (state: RootState) => state.charts[name]
  );

  return (
    <ReactEcharts
      className={className}
      style={{ height: `${height}px` }}
      opts={{ renderer: 'svg' }}
      option={options}
    />
  );
}

export default Chart;
