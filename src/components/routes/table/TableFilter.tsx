import React from 'react';
import { Input, InputNumber } from 'antd';

interface Props {
  filterLastName: (name: String) => void;
  filterPhone: (phoneNumber: String) => void;
}

const TableFilter: React.FC<Props> = ({ filterLastName, filterPhone }) => {
  const { Search } = Input;

  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', width: 500 }}
    >
      <Search
        placeholder="Начните вводить фамилию..."
        onChange={({ target }) => filterLastName(target.value)}
      />
      <Search
        type="number"
        placeholder="Начните вводить телефон..."
        onChange={({ target }) => filterPhone(target.value)}
      />
    </div>
  );
};

export default TableFilter;
