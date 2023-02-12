// React
import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// Consta components
import { Layout } from '@consta/uikit/Layout';
import { Button } from '@consta/uikit/Button';
import { Modal } from '@consta/uikit/Modal';
import { Select } from '@consta/uikit/Select';
import { DatePicker } from '@consta/uikit/DatePicker';

// Config
import { WORK_KINDS } from '../../../../config/work';

// Types
import { Period } from '../../../../types/chart/period';
import { WorkKind } from '../../../../types/work';

// SCSS
import styles from './ModelModal.module.scss';

interface ModelModalProps {
  addItems: Dispatch<SetStateAction<Period[]>>;
}

function ModelModal({ addItems }: ModelModalProps): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [date, setDate] = useState<[Date?, Date?] | null>(null);

  const [workKind, setWorkKind] = useState<WorkKind | null>(WORK_KINDS[0]);

  const handleOnClick = () => {
    const uuid: string = crypto.randomUUID();

    addItems((prevState: Period[]) => [
      ...prevState,
      {
        id: uuid,
        date,
        status: workKind?.status,
        label: workKind?.label
      } as Period
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
            items={WORK_KINDS}
            value={workKind}
            onChange={({ value }) => setWorkKind(value)}
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
