import React, { useEffect, useState } from 'react';
import { getData } from '../../../api/tableData';

interface Props {}

export const Table: React.FC<Props> = () => {
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    const { data } = await getData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('table ', data);

  return (
    <div>
      im table {data.results && data.results.map((item: any) => item.email)}
    </div>
  );
};
