// React
import React, { ReactElement } from 'react';

// Consta components
import { Card } from '@consta/uikit/Card';
import { Layout } from '@consta/uikit/Layout';
import { Badge } from '@consta/uikit/Badge';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconEye } from '@consta/icons/IconEye';

// Config
import { WORK_KINDS } from '../../../../config/work';

// Types
import { WorkKind } from '../../../../types/work';

// SCSS
import styles from './ModelFooter.module.scss';

function ModelFooter(): ReactElement {
  return (
    <Layout className={styles.footer}>
      {WORK_KINDS.map((work: WorkKind) => (
        <Card key={work.id} className={styles.work} shadow={false}>
          <Layout className={styles.info}>
            <Badge size="s" minified status={work.status} label={work.label} />
            <Text className={styles.text} size="xs">
              {work.label}
            </Text>
          </Layout>
          <Button onlyIcon iconLeft={IconEye} size="s" view="clear" />
        </Card>
      ))}
    </Layout>
  );
}

export default ModelFooter;
