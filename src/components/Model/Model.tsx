// React
import React, { ReactElement } from 'react';

import { Layout } from '@consta/uikit/Layout';

// Components
import ModelHeader from './components/ModelHeader/ModelHeader';
import ModelMainChart from './components/ModelMainChart/ModelMainChart';
import ModelAdditionalChart from './components/ModelAdditionalChart/ModelAdditionalChart';

function Model(): ReactElement {
  return (
    <Layout direction="column">
      <ModelHeader />
      <Layout direction="column">
        <ModelMainChart />
        <ModelAdditionalChart />
      </Layout>
      {/* Sider */}
      {/* Footer */}
    </Layout>
  );
}

export default Model;
