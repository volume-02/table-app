import React, { useEffect, useState } from 'react';
import { getData } from '../../../api/tableData';
import TableRow from './TableRow';
import TableNavigation from './TableNavigation';
import TableFilter from './TableFilter';

interface Props {}

export const Table: React.FC<Props> = () => {
  const [data, setData] = useState<any>({});
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(10);
  const [filteredData, setFilteredData] = useState([]);

  let stop = start + offset - 1;

  const fetchData = async () => {
    const { data } = await getData();
    setData(data);
    setFilteredData(data.results);
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

  if (!data.results) {
    return <h1>Loading...</h1>;
  }

  if (data.results) {
    let paginatedData = filteredData.filter(
      (item: object, index: number) => index >= start && index <= stop
    );

    const filteredByLastName = (lastName: string) => {
      const filteredData = data.results.filter((item: any) =>
        item.name.last.includes(lastName)
      );
      setFilteredData(filteredData);
      setStart(0);
    };

    const filteredByPhone = (phoneNumber: String) => {
      const normalizedNumber = +`${phoneNumber}`.replace(/\D+/g, ''); //разобраться почему при вводе символа выражение становится равным 0

      const filteredData = data.results.filter((item: any) =>
        item.phone.replace(/\D+/g, '').includes(+phoneNumber)
      );
      console.log('phoneNumber', normalizedNumber);
      setFilteredData(filteredData);
      setStart(0);
    };

    const pages = Math.ceil(filteredData.length / offset);
    const currentPage = Math.ceil(
      (filteredData.length - (filteredData.length - stop)) / offset
    );

    const jumpToPage = (page: number) => {
      if (page) {
        const start = page * offset - offset;
        setStart(start);
      }
    };

    return (
      <div>
        <h4>{data.results.length} results</h4>
        <TableFilter
          filterLastName={filteredByLastName}
          filterPhone={filteredByPhone}
        />
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
