// React
import React, { ReactElement, ReactNode, useRef, useState } from 'react';

// Consta components
import { Card } from '@consta/uikit/Card';
import { Popover as PopoverConsta } from '@consta/uikit/Popover';

// SCSS
import styles from './Popover.module.scss';

interface PopoverProps {
  button?: ReactNode;
  children?: ReactNode | ReactNode[];
}

function Popover({ button, children }: PopoverProps): ReactElement {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

  const handleClickOnAnchor = (): void => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  const handleClickOnOutside = (): void => {
    setIsPopoverVisible(false);
  };

  return (
    <>
      <div onClick={handleClickOnAnchor} ref={anchorRef}>
        {button}
      </div>
      <PopoverConsta
        className={styles.popover}
        hidden={!isPopoverVisible}
        offset="xs"
        direction="downStartLeft"
        spareDirection="downStartLeft"
        onClickOutside={handleClickOnOutside}
        anchorRef={anchorRef}
      >
        <Card shadow form="square" verticalSpace="s" horizontalSpace="s">
          {children}
        </Card>
      </PopoverConsta>
    </>
  );
}

export default Popover;
