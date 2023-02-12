import React, { ReactElement, useState } from 'react';

import { Select as SelectConsta } from '@consta/uikit/Select';

import { SelectItem } from '../../types/select-item';

type SelectProps = {
  label: string;
  items: SelectItem[];
};

function Select({ label, items }: SelectProps): ReactElement {
  const [item, setItem] = useState<SelectItem | null>(items[0]);

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
