import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Switch as SwitchConsta } from '@consta/uikit/Switch';

// Store
import { AppDispatch } from '../../store';

// Store slices
import { setOption } from '../../store/slices/chart-slice';

interface SwitchTagProps {
  label: string;
  setTags: Dispatch<SetStateAction<string[]>>;
}

function SwitchTag({ label, setTags }: SwitchTagProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    dispatch(
      setOption({
        option: ['legend', 'selected'],
        key: label,
        value: !isChecked
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
