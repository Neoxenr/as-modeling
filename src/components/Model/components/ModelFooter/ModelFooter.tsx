// React
import React, { ReactElement } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Card } from '@consta/uikit/Card';
import { Layout } from '@consta/uikit/Layout';
import { Badge } from '@consta/uikit/Badge';
import { Text } from '@consta/uikit/Text';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import { switchChartsArea } from '../../../../store/slices/chart-slice';

// Config work kinds
import { WORK_KINDS } from '../../../../config/work-kinds';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/chart-names';

// Types
import { WorkKind } from '../../../../types/work-kind';

// Components
import Visible from '../../../Visible/Visible';

// SCSS
import styles from './ModelFooter.module.scss';

function ModelFooter(): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Layout className={styles.footer}>
      {WORK_KINDS.map((work: WorkKind) => (
        <Card key={work.id} className={styles.work} shadow={false}>
          <Visible
            callback={(isVisible: boolean) =>
              dispatch(
                switchChartsArea({
                  names: [CHART_NAMES.MAIN_CHART, CHART_NAMES.ADDITIONAL_CHART],
                  data: {
                    areaIndex: work.id,
                    isVisible: !isVisible
                  }
                })
              )
            }
          >
            <Layout className={styles.info}>
              <Badge
                size="s"
                minified
                status={work.status}
                label={work.label}
              />
              <Text className={styles.text} size="xs">
                {work.label}
              </Text>
            </Layout>
          </Visible>
        </Card>
      ))}
    </Layout>
  );
}

export default ModelFooter;
