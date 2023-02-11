// React
import React, { ReactElement } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';

// Components
import ModelHeader from './components/ModelHeader/ModelHeader';
import ModelMainChart from './components/ModelMainChart/ModelMainChart';
import ModelAdditionalChart from './components/ModelAdditionalChart/ModelAdditionalChart';

// SCSS
import styles from './Model.module.scss';

function Model(): ReactElement {
  return (
    <Layout direction="column">
      <ModelHeader />
      <Layout className={styles.charts} direction="column">
        <ModelMainChart />
        <ModelAdditionalChart />
      </Layout>
    </Layout>
  );
}

export default Model;
