// React
import React, { ReactElement, useState } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';

// Types
import { Period } from '../../../../types/period';

// Utilities
import { convertPeriodToString } from '../../../../utilities';

// Components
import ModelModal from '../ModelModal/ModelModal';

// SCSS
import styles from './ModelSider.module.scss';

function ModelSider(): ReactElement {
  const [periods, setPeriods] = useState<Period[]>([]);

  return (
    <Layout className={styles.sider} direction="column">
      <ModelModal addItems={setPeriods} />
      {periods.map((period: Period) => (
        <div key={period.id}>
          <div>{convertPeriodToString(period.date[0], period.date[1])}</div>
          <div>{period.workType}</div>
        </div>
      ))}
    </Layout>
  );
}

export default ModelSider;
