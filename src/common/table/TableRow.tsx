import React from 'react';
import { Avatar } from 'antd';

interface ITableRowProps {
  data: Array<object>;
}

const TableRow: React.FC<ITableRowProps> = ({ data }) => {
  return (
    <>
      {data.map((item: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ width: 100 }}>{item.gender}</div>
            <div style={{ width: 160 }}>{item.location.city}</div>
            <div style={{ width: 100 }}>
              {`${item.name.last} ${item.name.first}`}
            </div>
            <div style={{ width: 300 }}>{item.email}</div>
            <div style={{ width: 160 }}>{item.login.username}</div>
            <div style={{ width: 150 }}>{item.dob}</div>
            <div style={{ width: 200 }}>{item.registered}</div>
            <div style={{ width: 150 }}>{item.phone}</div>
            <div style={{ width: 150 }}>{item.cell}</div>
            <div style={{ width: 100 }}>{item.id.name}</div>
            <div style={{ width: 90 }}>
              <Avatar
                shape="square"
                size="large"
                src={item.picture.medium}
                alt="avatar"
              />
            </div>
            <div style={{ width: 90 }}>{item.nat}</div>
          </div>
        );
      })}
    </>
  );
};

export default TableRow;
