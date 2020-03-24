import React, { ReactElement } from 'react';
import { Avatar } from 'antd';
import { IPerson } from 'types/types';
import s from './Table.module.css';
import { columnNames } from 'consts';

interface ITableRowProps {
  data: IPerson[];
}

export default function TableRow({ data }: ITableRowProps): ReactElement {
  return (
    <div>
      {data.map((item: IPerson, index: number) => {
        return (
          <div key={index} className={s.rowContainer}>
            {/* columnNames[0].width is ugly, it will be fixed */}
            <div style={{ width: columnNames[0].width }}>{item.gender}</div>
            <div style={{ width: columnNames[1].width }}>
              {item.location.city}
            </div>
            <div style={{ width: columnNames[2].width }}>
              {`${item.name.last} ${item.name.first}`}
            </div>
            <div style={{ width: columnNames[3].width }}>{item.email}</div>
            <div style={{ width: columnNames[4].width }}>
              {item.login.username}
            </div>
            <div style={{ width: columnNames[5].width }}>{item.dob}</div>
            <div style={{ width: columnNames[6].width }}>{item.registered}</div>
            <div style={{ width: columnNames[7].width }}>{item.phone}</div>
            <div style={{ width: columnNames[8].width }}>{item.cell}</div>
            <div style={{ width: columnNames[9].width }}>{item.id.name}</div>
            <div style={{ width: columnNames[10].width }}>
              <Avatar
                shape="square"
                size="large"
                src={item.picture.medium}
                alt="avatar"
              />
            </div>
            <div style={{ width: columnNames[11].width }}>{item.nat}</div>
          </div>
        );
      })}
    </div>
  );
}
