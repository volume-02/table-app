import React, { ReactElement } from 'react';
import { Input, Button, DatePicker } from 'antd';
import { IFilter } from 'types/types';
import { RangePickerValue } from 'antd/lib/date-picker/interface.d';
import s from './Table.module.css';

interface ITableFilterProps {
  filter: IFilter;
  handleChangeFilter: (target: EventTarget, property: string) => void;
  handleRange: (range: RangePickerValue) => void;
  handleClear: () => void;
}

export default function TableFilter({
  filter,
  handleChangeFilter,
  handleRange,
  handleClear
}: ITableFilterProps): ReactElement {
  const { Search } = Input;
  const { RangePicker } = DatePicker;

  return (
    <div className={s.container}>
      <Search
        className={s.searchContainer}
        placeholder="Начните вводить фамилию..."
        value={filter.name}
        onChange={({ target }) => handleChangeFilter(target, 'name')}
      />
      <Search
        className={s.searchContainer}
        type="number"
        value={filter.phone}
        placeholder="Начните вводить телефон..."
        onChange={({ target }) => handleChangeFilter(target, 'phone')}
      />
      <Search
        className={s.searchContainer}
        placeholder="Начните вводить город..."
        value={filter.city}
        onChange={({ target }) => handleChangeFilter(target, 'city')}
      />
      <div
        className={s.datePickerContainer}
      >
        <RangePicker
          onChange={value => {
            handleRange(value);
          }}
        />
        <Button className={s.button} type="primary" onClick={handleClear}>
          Очистить
        </Button>
      </div>
    </div>
  );
}
