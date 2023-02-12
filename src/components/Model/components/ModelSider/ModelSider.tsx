// React
import React, { ReactElement, useState } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Card } from '@consta/uikit/Card';
import { Badge } from '@consta/uikit/Badge';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconClose } from '@consta/icons/IconClose';

// Types
import { Period } from '../../../../types/chart/period';

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
      <Layout className={styles.periods} direction="column">
        {periods.map((period: Period) => (
          <Card key={period.id} className={styles.period} shadow={false}>
            <Badge
              size="m"
              minified
              status={period.status}
              label={period.label}
            />
            <Text className={styles.text} size="xs">
              {convertPeriodToString(period.date[0], period.date[1])}
            </Text>
            <Button
              onlyIcon
              iconLeft={IconClose}
              size="xs"
              view="clear"
              onClick={() =>
                setPeriods(
                  periods.filter((item: Period) => item.id !== period.id)
                )
              }
            />
          </Card>
        ))}
      </Layout>
    </Layout>
  );
}

export default ModelSider;
