import React, { ReactElement } from 'react';

interface ITableHeaderProps {
  columnNames: string[];
}

export default function TableHeader({
  columnNames = []
}: ITableHeaderProps): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ width: 100 }}>{columnNames[0]}</div>
      <div style={{ width: 160 }}>{columnNames[1]}</div>
      <div style={{ width: 100 }}>{columnNames[2]}</div>
      <div style={{ width: 300 }}>{columnNames[3]}</div>
      <div style={{ width: 160 }}>{columnNames[4]}</div>
      <div style={{ width: 150 }}>{columnNames[5]}</div>
      <div style={{ width: 200 }}>{columnNames[6]}</div>
      <div style={{ width: 150 }}>{columnNames[7]}</div>
      <div style={{ width: 150 }}>{columnNames[8]}</div>
      <div style={{ width: 100 }}>{columnNames[9]}</div>
      <div style={{ width: 90 }}>{columnNames[10]}</div>
      <div style={{ width: 90 }}>{columnNames[11]}</div>
    </div>
  );
}
