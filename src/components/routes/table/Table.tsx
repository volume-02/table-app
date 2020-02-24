import React, { useEffect, useState } from 'react';
import { getData } from '../../../api/tableData';
import TableRow from './TableRow';

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

  console.table('table ', data.results);

  if (!data.results) {
    return <h1>Loading...</h1>;
  }

  if (data.results) {
    return (
      <div>
        <h4>{data.results.length} results</h4>
        <TableRow data={data.results} />
      </div>
    );
  }
};
