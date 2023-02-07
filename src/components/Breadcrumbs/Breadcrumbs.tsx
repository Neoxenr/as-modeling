import React, { ReactElement } from 'react';

import { Breadcrumbs as BreadcrumbsConsta } from '@consta/uikit/Breadcrumbs';

import { IconHome } from '@consta/icons/IconHome';

type BreadcrubmsProps = {
  onlyIconRoot: boolean;
  size: 's' | 'm' | 'xs' | 'l';
};

const pages = [
  { label: 'Домашняя страница', icon: IconHome },
  { label: 'Производство 1' },
  { label: 'АВТ-10' },
  { label: 'H-115' },
  { label: 'Электродвигатель' }
];

function Breadcrubms({ onlyIconRoot, size }: BreadcrubmsProps): ReactElement {
  return (
    <BreadcrumbsConsta onlyIconRoot={onlyIconRoot} size={size} items={pages} />
  );
}

export default Breadcrubms;
