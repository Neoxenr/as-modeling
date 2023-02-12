// React
import React, { ReactElement } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';

// Components
import ModelHeader from './components/ModelHeader/ModelHeader';
import ModelMainChart from './components/ModelMainChart/ModelMainChart';
import ModelAdditionalChart from './components/ModelAdditionalChart/ModelAdditionalChart';
import ModelSider from './components/ModelSider/ModelSider';

// SCSS
import styles from './Model.module.scss';

function Model(): ReactElement {
  return (
    <Layout direction="column">
      <ModelHeader />
      <Layout>
        <Layout flex={5} className={styles.charts} direction="column">
          <ModelMainChart />
          <ModelAdditionalChart />
        </Layout>
        <Layout flex={1}>
          <ModelSider />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Model;
