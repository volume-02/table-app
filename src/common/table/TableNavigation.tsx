import React from 'react';
import { Button, InputNumber, Select, Typography } from 'antd';
import s from './Table.module.css';

interface ITableNavigationProps {
  changePage: (next?: boolean) => void;
  setOffset: (offset: number) => void;
  jumpToPage: (page?: number) => void;
  pages: number;
  currentPage: number;
}

const TableNavigation: React.FC<ITableNavigationProps> = ({
  changePage,
  setOffset,
  pages,
  currentPage,
  jumpToPage
}) => {
  const { Option } = Select;
  const { Text } = Typography;

  return (
    <div className={s.container}>
      <Button onClick={() => changePage(false)}>сюда</Button>
      <Select defaultValue={10} onChange={(value: number) => setOffset(+value)}>
        {[10, 20, 30].map(item => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <Text strong>pages: {pages}</Text>
      <InputNumber type="number" onChange={value => jumpToPage(value)} />
      <Text strong>current page: {currentPage}</Text>
      <Button type="primary" onClick={() => changePage()}>
        туда
      </Button>
    </div>
  );
};

export default TableNavigation;
