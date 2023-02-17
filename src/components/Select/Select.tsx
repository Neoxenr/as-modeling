// React
import React, { ReactElement, useState } from 'react';

// Consta components
import { Select as SelectConsta } from '@consta/uikit/Select';

// Types
import { SelectItem } from '../../types/item/select';

const items: SelectItem[] = [
  { id: 1, label: 'AE' },
  { id: 2, label: 'AB' },
  { id: 3, label: 'MG' }
];

interface SelectProps {
  label: string;
}

function Select({ label }: SelectProps): ReactElement {
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
