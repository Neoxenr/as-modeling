import React, { ReactElement, useState } from 'react';

import { Select as SelectConsta } from '@consta/uikit/Select';

type Item = {
  label: string;
  id: number;
};

type SelectProps = {
  label: string;
};

const items: Item[] = [
  {
    label: 'AE',
    id: 1
  },
  {
    label: 'AB',
    id: 2
  },
  {
    label: 'MG',
    id: 3
  }
];

function Select({ label }: SelectProps): ReactElement {
  const [item, setItem] = useState<Item | null>(items[0]);

  return (
    <SelectConsta
      label={label}
      items={items}
      value={item}
      onChange={({ value }) => setItem(value)}
    />
  );
}

export default Select;
