import React, { ReactElement } from 'react';
import s from './Table.module.css';
import { IHeader } from 'types/types';

interface ITableHeaderProps {
  columnNames: IHeader[];
}

export default function TableHeader({
  columnNames = []
}: ITableHeaderProps): ReactElement {
  return (
    <div className={s.headerContainer}>
      {columnNames.map((columnName, index) => (
        <div key={index} style={{ width: columnName.width }}>
          {columnName.name}
        </div>
      ))}
    </div>
  );
}
