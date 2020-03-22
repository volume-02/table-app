import React, { ReactElement } from 'react';

interface ITableProps {
  children: Array<ReactElement>;
  rows?: number;
}

export default function Table({
  children,
  rows = 0
}: ITableProps): ReactElement {
  return (
    <>
      <h4>{rows} results</h4>
      {children}
    </>
  );
}
