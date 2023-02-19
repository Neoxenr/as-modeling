// React
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Switch as SwitchConsta } from '@consta/uikit/Switch';

// Config chart names
import { CHART_NAMES } from '../../config/chart/chart-names';

// Store
import { AppDispatch } from '../../store';

// Store slices
import { switchYAxis } from '../../store/slices/chart-slice';

interface SwitchProps {
  label: string;
  addItems: Dispatch<SetStateAction<string[]>>;
}

function Switch({ label, addItems }: SwitchProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleOnChange = (): void => {
    setIsChecked(!isChecked);

    dispatch(
      switchYAxis({
        name: CHART_NAMES.MAIN_CHART,
        data: { yAxisName: label, isVisible: isChecked }
      })
    );

    if (!isChecked) {
      addItems((prevState: string[]) => [...prevState, label]);
    } else {
      addItems((prevState: string[]) =>
        prevState.filter((item) => item !== label)
      );
    }
  };

  return (
    <SwitchConsta label={label} checked={isChecked} onChange={handleOnChange} />
  );
}

export default Switch;
