// React
import React, { ReactElement } from 'react';

// Consta components
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';

// Consta icons
import { IconProcessing } from '@consta/icons/IconProcessing';

// Components
import Select from '../../../Select/Select';
import Breadcrumbs from '../../../Breadcrumbs/Breadcrumbs';
import Popover from '../../../Popover/Popover';

// SCSS
import styles from './ModelHeader.module.scss';

function ModelHeader(): ReactElement {
  return (
    <Layout className={styles.header}>
      <Layout flex={1} direction="column" className={styles.info}>
        <Breadcrumbs onlyIconRoot size="l" />
        <Layout direction="column" className={styles.description}>
          <Layout className={styles.name}>
            <Text weight="bold" size="xl">
              Модель электродвигателя
            </Text>
            <Popover button={<Button label="80%" />}>
              <Text size="xs">Метрика качества модели</Text>
            </Popover>
          </Layout>
          <Text view="secondary">01.01.2023-01.02.2023</Text>
        </Layout>
      </Layout>
      <Layout flex={1} className={styles.btnGroup}>
        <Layout className={styles.settings}>
          <Button view="secondary" iconLeft={IconProcessing} onlyIcon />
          <Select label="Алгоритм" />
        </Layout>
        <Layout className={styles.actions}>
          <Button view="secondary" label="Добавить разметку" />
          <Button view="primary" label="Обучить модель" />
          <Button view="secondary" label="Сохранить изменения" />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default ModelHeader;
