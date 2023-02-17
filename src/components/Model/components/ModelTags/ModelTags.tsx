// Reacat
import React, { ReactElement, useEffect, useMemo, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Tag } from '@consta/uikit/Tag';
import { Button } from '@consta/uikit/Button';
import { Layout } from '@consta/uikit/Layout';

// Consta icons
import { IconAdd } from '@consta/icons/IconAdd';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import { hideYAxis } from '../../../../store/slices/chart-slice';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/chart-names';

// Utilities
import { convertArrayToObject } from '../../../../utilities';

// Types
import { Tags } from '../../../../types/chart/tags';
import { Group } from '../../../../types/group';

// Components
import Popover from '../../../Popover/Popover';
import Switch from '../../../Switch/Switch';
import Visible from '../../../Visible/Visible';

// SCSS
import styles from './ModelTags.module.scss';

interface ModelTagsProps {
  tags?: string[];
}

function ModelTags({ tags }: ModelTagsProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [items, setItems] = useState<string[]>([]);

  const tagsMapping: Tags = useMemo(
    () => (tags ? convertArrayToObject(tags) : {}),
    [tags]
  );

  useEffect(() => {
    if (tags) {
      setItems(tags);
    }
  }, [tags]);

  return (
    <Layout className={styles.tags}>
      {items.length > 0 && (
        <div className={styles.params}>
          {items.map((item: string) => (
            <Visible
              key={item}
              callback={(isVisible: boolean) =>
                dispatch(
                  hideYAxis({
                    name: CHART_NAMES.MAIN_CHART,
                    data: {
                      axisName: item,
                      isVisible
                    }
                  })
                )
              }
            >
              <Tag
                mode="info"
                className={styles.param}
                group={(tagsMapping[item] + 1) as Group}
                label={item}
              />
            </Visible>
          ))}
        </div>
      )}
      <Popover
        button={
          <Button onlyIcon iconLeft={IconAdd} size="m" view="secondary" />
        }
      >
        <Layout className={styles.switches} direction="column">
          {tags?.map((tag: string) => (
            <Switch key={tag} label={tag} addItems={setItems} />
          ))}
        </Layout>
      </Popover>
    </Layout>
  );
}

export default ModelTags;
