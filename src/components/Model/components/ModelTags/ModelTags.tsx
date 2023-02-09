// Reacat
import React, { ReactElement, useState } from 'react';

// Consta components
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';

// Consta icons
import { IconAdd } from '@consta/icons/IconAdd';

// Components
import Popover from '../../../Popover/Popover';
import SwitchTag from '../../../SwitchTag/SwitchTag';
import Parameter from '../../../Parameter/Parameter';

interface ModelTagsProps {
  tags?: string[];
}

function ModelTags({ tags }: ModelTagsProps): ReactElement {
  const [items, setItems] = useState<string[]>([]);

  return (
    <Layout>
      <Layout>
        {items.map((item: string, index: number) => (
          <Parameter key={item} label={item} group={index} />
        ))}
      </Layout>
      <Popover button={<Button onlyIcon view="secondary" iconLeft={IconAdd} />}>
        <Layout direction="column">
          {tags?.map((tag: string) => (
            <SwitchTag key={tag} label={tag} setTags={setItems} />
          ))}
        </Layout>
      </Popover>
    </Layout>
  );
}

export default ModelTags;
