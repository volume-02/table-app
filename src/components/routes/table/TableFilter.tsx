import React from 'react';
import { Input } from 'antd';

interface Props {
  filterLastName: (name: String) => void;
}

const TableFilter: React.FC<Props> = ({ filterLastName }) => {
  const { Search } = Input;

  return (
    <div>
      <Search onChange={({ target }) => filterLastName(target.value)} />
    </div>
  );
};

export default TableFilter;
