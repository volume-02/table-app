import React, { ReactElement } from 'react';
import { Input, Button, DatePicker } from 'antd';

interface ITableFilterProps {
  filter: any;
  handleChangeFilter: any;
  handleRange: any;
  handleClear: any;
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
    <div
      style={{ display: 'flex', justifyContent: 'space-between', width: 1200 }}
    >
      <Search
        placeholder="Начните вводить фамилию..."
        value={filter.name}
        onChange={({ target }) => handleChangeFilter(target, 'name')}
      />
      <Search
        type="number"
        value={filter.phone}
        placeholder="Начните вводить телефон..."
        onChange={({ target }) => handleChangeFilter(target, 'phone')}
      />
      <Search
        placeholder="Начните вводить город..."
        value={filter.city}
        onChange={({ target }) => handleChangeFilter(target, 'city')}
      />
      <div style={{ width: 900 }}>
        <RangePicker
          onChange={value => {
            handleRange(value);
          }}
        />
      </div>
      <Button type="primary" onClick={handleClear}>
        Очистить
      </Button>
    </div>
  );
}
