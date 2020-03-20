import React from 'react';
import { Button, InputNumber, Select, Typography } from 'antd';

interface Props {
  changePage: (next?: boolean) => void;
  setOffset: (offset: number) => void;
  jumpToPage: (page: number) => void;
  pages: number;
  currentPage: number;
}

const TableNavigation: React.FC<Props> = ({
  changePage,
  setOffset,
  pages,
  currentPage,
  jumpToPage
}) => {
  const { Option } = Select;
  const { Text } = Typography;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 1200
      }}
    >
      <Button onClick={() => changePage(false)}>сюда</Button>
      <Select defaultValue={10} onChange={(value: number) => setOffset(value)}>
        <Option value="10">10</Option>
        <Option value="20">20</Option>
        <Option value="30">30</Option>
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
