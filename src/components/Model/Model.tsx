// React
import React, { ReactElement } from 'react';

import { Layout } from '@consta/uikit/Layout';

// Components
import ModelHeader from './components/ModelHeader/ModelHeader';
import ModelInfo from './components/ModelInfo/ModelInfo';

function Model(): ReactElement {
  return (
    <Layout direction="column">
      <ModelHeader />
      <ModelInfo />
      {/* Sider */}
      {/* Footer */}
    </Layout>
  );
}

export default Model;
