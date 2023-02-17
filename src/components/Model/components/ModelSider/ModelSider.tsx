// React
import React, { ReactElement, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Card } from '@consta/uikit/Card';
import { Badge } from '@consta/uikit/Badge';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { List } from '@consta/uikit/ListCanary';

// Consta icons
import { IconClose } from '@consta/icons/IconClose';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/chart-names';

// Config work kinds
import { WORK_KINDS } from '../../../../config/work-kinds';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import {
  removeArea,
  removeAreasByGroupIndex
} from '../../../../store/slices/chart-slice';

// Types
import { Period } from '../../../../types/chart/period';
import { WorkKind } from '../../../../types/work-kind';

// Components
import ModelModal from '../ModelModal/ModelModal';

// SCSS
import styles from './ModelSider.module.scss';

function ModelSider(): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [periods, setPeriods] = useState<Period[]>([]);

  return (
    <Layout className={styles.sider} direction="column">
      <ModelModal addItems={setPeriods} />
      <Layout className={styles.periods} direction="column">
        <List
          items={periods}
          groups={WORK_KINDS}
          getItemGroupKey={(period: Period) => period.areaIndex}
          getGroupRightSide={(workKind: WorkKind) => (
            <Button
              size="s"
              view="ghost"
              label="Удалить все"
              onClick={() => {
                dispatch(
                  removeAreasByGroupIndex({
                    names: [
                      CHART_NAMES.MAIN_CHART,
                      CHART_NAMES.ADDITIONAL_CHART
                    ],
                    areaIndex: workKind.id
                  })
                );

                setPeriods(
                  periods.filter(
                    (period: Period) => period.areaIndex !== workKind.id
                  )
                );
              }}
            />
          )}
          renderItem={(period: Period) => (
            <Card key={period.id} className={styles.period} shadow={false}>
              <Badge
                size="m"
                minified
                status={period.status}
                label={period.label}
              />
              <Text className={styles.text} size="xs">
                {period.date}
              </Text>
              <Button
                onlyIcon
                iconLeft={IconClose}
                size="xs"
                view="clear"
                onClick={() => {
                  setPeriods(
                    periods.filter((item: Period) => item.id !== period.id)
                  );

                  dispatch(
                    removeArea({
                      names: [
                        CHART_NAMES.MAIN_CHART,
                        CHART_NAMES.ADDITIONAL_CHART
                      ],
                      data: {
                        id: period.id,
                        areaIndex: period.areaIndex
                      }
                    })
                  );
                }}
              />
            </Card>
          )}
        />
      </Layout>
    </Layout>
  );
}

export default ModelSider;
