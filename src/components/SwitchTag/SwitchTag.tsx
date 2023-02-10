// React
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Switch as SwitchConsta } from '@consta/uikit/Switch';

// Store
import { AppDispatch } from '../../store';

// Config chart names
import { CHART_NAMES } from '../../config/chart/names';

// Store slices
import { switchChartYAxis } from '../../store/slices/chart-slice';

interface SwitchTagProps {
  label: string;
  setTags: Dispatch<SetStateAction<string[]>>;
}

function SwitchTag({ label, setTags }: SwitchTagProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    dispatch(
      switchChartYAxis({
        name: CHART_NAMES.MAIN_CHART,
        visible: { name: label, isVisible: isChecked }
      })
    );

    if (!isChecked) {
      setTags((prevState: string[]) => [...prevState, label]);
    } else {
      setTags((prevState: string[]) =>
        prevState.filter((item) => item !== label)
      );
    }
  };

  return (
    <SwitchConsta label={label} checked={isChecked} onChange={handleOnChange} />
  );
}

export default SwitchTag;
