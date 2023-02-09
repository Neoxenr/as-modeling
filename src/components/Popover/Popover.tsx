import React, { ReactElement, ReactNode, useRef, useState } from 'react';

import { Button } from '@consta/uikit/Button';
import { Card } from '@consta/uikit/Card';
import { Popover as PopoverConsta } from '@consta/uikit/Popover';
import { IconComponent } from '@consta/icons/Icon';

interface PopoverProps {
  button?: ReactNode;
  children?: ReactNode | ReactNode[];
}

function Popover({ button, children }: PopoverProps): ReactElement {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

  const handleClickOnAnchor = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  const handleClickOnOutside = () => {
    setIsPopoverVisible(false);
  };

  return (
    <>
      <div onClick={handleClickOnAnchor} ref={anchorRef}>
        {button}
      </div>
      <PopoverConsta
        hidden={!isPopoverVisible}
        offset="xs"
        direction="downStartLeft"
        spareDirection="downStartLeft"
        onClickOutside={handleClickOnOutside}
        anchorRef={anchorRef}
      >
        <Card shadow form="square" verticalSpace="xs" horizontalSpace="xs">
          {children}
        </Card>
      </PopoverConsta>
    </>
  );
}

export default Popover;
