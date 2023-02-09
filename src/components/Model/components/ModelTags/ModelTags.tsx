// Reacat
import React, { ReactElement, useEffect, useMemo, useState } from 'react';

// Consta components
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';

// Consta icons
import { IconAdd } from '@consta/icons/IconAdd';

// Types
import { Groups } from '../../../../types/group';

// Components
import Popover from '../../../Popover/Popover';
import SwitchTag from '../../../SwitchTag/SwitchTag';
import Parameter from '../../../Parameter/Parameter';

// SCSS
import styles from './ModelTags.module.scss';

interface ModelTagsProps {
  tags?: string[];
}

function ModelTags({ tags }: ModelTagsProps): ReactElement {
  const [items, setItems] = useState<string[]>([]);

  const groups: Groups | undefined = useMemo(
    () => tags?.reduce((obj, tag, index) => ({ ...obj, [tag]: index }), {}),
    [tags]
  );

  useEffect(() => {
    if (tags) {
      setItems(tags);
    }
  }, [tags]);

  return (
    <Layout className={styles.tags}>
      <Layout className={styles.params}>
        {items.map((item: string) => (
          <Parameter key={item} label={item} group={groups?.[item] ?? 1} />
        ))}
      </Layout>
      <Popover
        button={
          <Button onlyIcon size="m" iconLeft={IconAdd} view="secondary" />
        }
      >
        <Layout className={styles.switches} direction="column">
          {tags?.map((tag: string) => (
            <SwitchTag key={tag} label={tag} setTags={setItems} />
          ))}
        </Layout>
      </Popover>
    </Layout>
  );
}

export default ModelTags;
