import React, { useEffect, useState } from 'react';
import { getData } from '../../../api/tableData';
import TableRow from './TableRow';

interface Props {}

export const Table: React.FC<Props> = () => {
  const [data, setData] = useState<any>({});
  const [start, setStart] = useState(0);
  // const [stop, setStop] = useState(9);
  const [offset, setOffset] = useState(10);

  let stop = start + offset - 1;

  const fetchData = async () => {
    const { data } = await getData();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.table('table ', data.results);

  const changePage = (next: boolean = true) => {
    if (next) {
      setStart(start + offset);
    } else {
      setStart(start - offset);
    }
  };

  console.log('start, stop', start, stop);

  if (!data.results) {
    return <h1>Loading...</h1>;
  }

  if (data.results) {
    const paginatedData = data.results.filter(
      (item: object, index: number) => index >= start && index <= stop
    );

    console.log('paginatedData', paginatedData);

    return (
      <div>
        <h4>{data.results.length} results</h4>
        <TableRow data={paginatedData} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 1200
          }}
        >
          <button onClick={() => changePage(false)}>туда</button>
          <select
            name="select"
            defaultValue="10"
            onChange={e => setOffset(+e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <button onClick={() => changePage()}>сюда</button>
        </div>
      </div>
    );
  }
};
