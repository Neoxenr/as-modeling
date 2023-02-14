// React
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useMemo,
  useState
} from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';
import { Select } from '@consta/uikit/Select';
import { DatePicker } from '@consta/uikit/DatePicker';

// Store
import { AppDispatch } from '../../../../store';

// Store slices
import { addAreaToCharts } from '../../../../store/slices/chart-slice';

// Utilities
import { convertArrayToObject } from '../../../../utilities';

// Config work kinds
import { WORK_KINDS } from '../../../../config/work-kinds';

// Config chart names
import { CHART_NAMES } from '../../../../config/chart/chart-names';

// Services
import { useGetParamsQuery } from '../../../../services/model';

// Types
import { WorkKind } from '../../../../types/work-kind';
import { Period } from '../../../../types/chart/period';
import { Point } from '../../../../types/chart/point';

// SCSS
import styles from './ModelModal.module.scss';

interface ModelModalProps {
  addItems: Dispatch<SetStateAction<Period[]>>;
}

function ModelModal({ addItems }: ModelModalProps): ReactElement {
  const dispatch: AppDispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [date, setDate] = useState<[Date?, Date?] | null>(null);
  const [workKind, setWorkKind] = useState<WorkKind | null>(WORK_KINDS[0]);

  const { data } = useGetParamsQuery();

  const dates = useMemo(
    () => data?.[0].points.map((point: Point) => new Date(point.d)),
    [data]
  );

  const datesMapping = useMemo(() => convertArrayToObject(dates ?? []), [data]);

  const minDate = useMemo(
    () =>
      dates
        ? new Date(Math.min(...dates.map((item: Date) => item.getTime())))
        : new Date(),
    [data]
  );
  const maxDate = useMemo(
    () =>
      dates
        ? new Date(Math.max(...dates.map((item: Date) => item.getTime())))
        : new Date(),
    [data]
  );

  const isButtonDisabled: boolean = date ? !date[0] || !date[1] : true;

  const handleOnClick = (): void => {
    const uuid: string = crypto.randomUUID();

    const firstDate = (date?.[0] ?? new Date())?.toString();
    const secondDate = (date?.[1] ?? new Date())?.toString();

    addItems((prevState: Period[]) => [
      ...prevState,
      {
        id: uuid,
        date,
        status: workKind?.status,
        label: workKind?.label,
        areaIndex: workKind?.id
      } as Period
    ]);

    setIsModalOpen(false);

    dispatch(
      addAreaToCharts({
        names: [CHART_NAMES.MAIN_CHART, CHART_NAMES.ADDITIONAL_CHART],
        data: {
          id: uuid,
          areaIndex: workKind?.id,
          period: [datesMapping[firstDate], datesMapping[secondDate]]
        }
      })
    );
  };

  return (
    <>
      <Button
        className={styles.btn}
        label="Добавить область"
        view="secondary"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        className={styles.modal}
        isOpen={isModalOpen}
        onClickOutside={() => setIsModalOpen(false)}
        onEsc={() => setIsModalOpen(false)}
      >
        <Layout className={styles.content} direction="column">
          <DatePicker
            minDate={minDate}
            maxDate={maxDate}
            type="date-range"
            format="dd.MM.yyyy"
            separator="."
            placeholder="ДД.ММ.ГГГГ"
            label="Период"
            required
            value={date}
            onChange={({ value }) => setDate(value)}
            withClearButton
          />
          <Select
            label="Тип работы"
            items={WORK_KINDS}
            value={workKind}
            onChange={({ value }) => setWorkKind(value)}
          />
          <Button
            disabled={isButtonDisabled}
            label="Добавить область"
            view="primary"
            onClick={handleOnClick}
          />
        </Layout>
      </Modal>
    </>
  );
}

export default ModelModal;
