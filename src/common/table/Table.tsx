import React, { ReactElement } from 'react';
import s from './Table.module.css';

interface ITableProps {
  children: Array<ReactElement>;
  rows?: number;
}

export default function Table({
  children,
  rows = 0
}: ITableProps): ReactElement {
  return (
    <div className={s.tableContainer}>
      <h4>{rows} results</h4>
      {children}
    </div>
  );
}
