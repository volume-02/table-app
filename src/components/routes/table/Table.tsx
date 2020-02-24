import React, { useEffect, useState } from 'react';
import { getData } from '../../../api/tableData';
import TableRow from './TableRow';
import TableNavigation from './TableNavigation';

interface Props {}

export const Table: React.FC<Props> = () => {
  const [data, setData] = useState<any>({});
  const [start, setStart] = useState(0);
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

    const pages = Math.ceil(data.results.length / offset);
    const currentPage = Math.ceil(
      (data.results.length - (data.results.length - stop)) / offset
    );

    const jumpToPage = (page: number) => {
      if (page) {
        const start = page * offset - offset;
        setStart(start);
      }
    };

    console.log('paginatedData', paginatedData);

    return (
      <div>
        <h4>{data.results.length} results</h4>
        <TableRow data={paginatedData} />
        <TableNavigation
          changePage={changePage}
          setOffset={setOffset}
          pages={pages}
          currentPage={currentPage}
          jumpToPage={jumpToPage}
        />
      </div>
    );
  }
};
