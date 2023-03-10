// React
import React, { ReactElement } from 'react';

// Consta components
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';

// Consta icons
import { IconProcessing } from '@consta/icons/IconProcessing';
import { IconHome } from '@consta/icons/IconHome';

// Types
import { BreadcrumbsItem } from '../../../../types/item/breadcrumbs';

// Components
import Popover from '../../../Popover/Popover';
import Select from '../../../Select/Select';

// SCSS
import styles from './ModelHeader.module.scss';

const items: BreadcrumbsItem[] = [
  { label: 'Домашняя страница', icon: IconHome },
  { label: 'Производство 1' },
  { label: 'АВТ-10' },
  { label: 'H-115' },
  { label: 'Электродвигатель' }
];

function ModelHeader(): ReactElement {
  return (
    <Layout className={styles.header}>
      <Layout flex={1} direction="column" className={styles.info}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          onlyIconRoot
          size="l"
          items={items}
        />
        <Layout direction="column" className={styles.description}>
          <Layout className={styles.name}>
            <Text weight="bold" size="xl">
              Модель электродвигателя
            </Text>
            <Popover button={<Button view="ghost" label="80%" />}>
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
