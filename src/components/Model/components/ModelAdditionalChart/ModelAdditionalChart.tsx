// React
import React, { ReactElement } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';

// Consta icons
import { IconAdd } from '@consta/icons/IconAdd';
import { IconRemove } from '@consta/icons/IconRemove';
import { IconClose } from '@consta/icons/IconClose';
import { IconExpand } from '@consta/icons/IconExpand';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/chart-names';

// Components
import Chart from '../../../Chart/Chart';
import Modal from '../../../Modal/Modal';

// SCSS
import styles from './ModelAdditionalChart.module.scss';

function ModelAdditionalChart(): ReactElement {
  return (
    <Layout direction="column" className={styles.chart}>
      <Layout className={styles.header}>
        <Text className={styles.title} size="s" weight="semibold">
          Аномальноя состояние
        </Text>
        <div className={styles.btnGroup}>
          <Layout className={styles.threshold}>
            <Text size="xs" view="secondary">
              Порог нормы threshold:
            </Text>
            <div className={styles.change}>
              <Button onlyIcon iconLeft={IconRemove} view="clear" />
              <Text>0.550</Text>
              <Button onlyIcon iconLeft={IconAdd} view="clear" />
            </div>
            <Button view="secondary" label="Оптимизировать" />
          </Layout>
          <div className={styles.actions}>
            <Modal
              className={styles.modal}
              openButton={
                <Button onlyIcon iconLeft={IconExpand} view="clear" />
              }
            >
              <Chart
                className={styles.modalChart}
                name={CHART_NAMES.ADDITIONAL_CHART}
                height={window.innerHeight - 200}
              />
            </Modal>
            <Button onlyIcon iconLeft={IconClose} view="clear" />
          </div>
        </div>
      </Layout>
      <Chart
        className={styles.echart}
        name={CHART_NAMES.ADDITIONAL_CHART}
        height={300}
      />
    </Layout>
  );
}

export default ModelAdditionalChart;
