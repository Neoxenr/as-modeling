// React
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';
import { DatePicker } from '@consta/uikit/DatePicker';
import { Select } from '@consta/uikit/Select';

// Types
import { Period } from '../../../../types/period';
import { SelectItem } from '../../../../types/select-item';

// SCSS
import styles from './ModelModal.module.scss';

const items: SelectItem[] = [
  { id: 1, label: 'Нормальная работа' },
  { id: 2, label: 'Аномальная работа' },
  { id: 3, label: 'Отказы' },
  { id: 4, label: 'Офлайн' }
];

interface ModelModalProps {
  addItems: Dispatch<SetStateAction<Period[]>>;
}

function ModelModal({ addItems }: ModelModalProps): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [date, setDate] = useState<[Date?, Date?] | null>(null);

  const [workType, setWorkType] = useState<SelectItem | null>(items[0]);

  const handleOnClick = () => {
    const uuid: string = crypto.randomUUID();

    addItems((prevState: Period[]) => [
      ...prevState,
      { id: uuid, date, workType: workType?.label } as Period
    ]);

    setIsModalOpen(false);
  };

  const buttonIsDisabled: boolean = date ? !date[0] || !date[1] : true;

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
            type="date-time-range"
            label="Период"
            required
            value={date}
            onChange={({ value }) => setDate(value)}
            withClearButton
          />
          <Select
            label="Тип работы"
            items={items}
            value={workType}
            onChange={({ value }) => setWorkType(value)}
          />
          <Button
            disabled={buttonIsDisabled}
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
