import React from 'react';

interface Props {}

const TableRow: React.FC<Props> = (props: any) => {
  const { data } = props;
  console.log('data rows', data);
  return (
    <div>
      {data.map((item: any, index: number) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 1200
            }}
          >
            <div>{item.gender}</div>
            <div>{item.location.city}</div>
            <div>{item.name.first}</div>
            <div>{item.email}</div>
            <div>{item.login.username}</div>
            <div>{item.dob}</div>
            <div>{item.registred}</div>
            <div>{item.phone}</div>
            <div>{item.cell}</div>
            <div>{item.id.name}</div>
            <div>
              <img src={item.picture.medium} alt="avatar"></img>
            </div>
            <div>{item.nat}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TableRow;
