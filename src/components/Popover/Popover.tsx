import React, { ReactElement, useRef, useState } from 'react';

import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { Popover as PopoverConsta } from '@consta/uikit/Popover';

function Popover(): ReactElement {
  const anchorRef = useRef<HTMLButtonElement>(null);

  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

  const handleClickOnAnchor = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <>
      <Button label="80%" onClick={handleClickOnAnchor} ref={anchorRef} />
      {isPopoverVisible && (
        <PopoverConsta
          offset="xs"
          direction="downStartLeft"
          spareDirection="downStartLeft"
          anchorRef={anchorRef}
        >
          <Card shadow form="square" verticalSpace="xs" horizontalSpace="xs">
            <Text size="xs">Метрика качества модели</Text>
          </Card>
        </PopoverConsta>
      )}
    </>
  );
}

export default Popover;
