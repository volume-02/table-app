import React, { useEffect, useState } from 'react';
import { getData } from 'api/tableData';
import TableRow from 'common/Table/TableRow';
import TableNavigation from 'common/Table/TableNavigation';
import PersonTableFilter from './PersonTableFilter';
import Table from 'common/Table';
import TableHeader from 'common/Table/TableHeader';
import { columnNames } from 'consts';
import { IPerson } from 'types/types';
import Preloader from 'common/Preloader';
interface IPersonsTableProps {}

export const PersonsTable: React.FC<IPersonsTableProps> = () => {
  const [data, setData] = useState<IPerson[]>();
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(10);
  const [filteredData, setFilteredData] = useState<IPerson[]>([]);

  let stop = start + offset - 1;

  const fetchData = async () => {
    const { data } = await getData();
    setData(data.results);
    setFilteredData(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changePage = (next: boolean = true) => {
    if (next) {
      setStart(start + offset);
    } else {
      setStart(start - offset);
    }
  };

  if (!data) {
    return <Preloader />;
  }

  if (data) {
    let paginatedData = filteredData.filter(
      (_: any, index: number) => index >= start && index <= stop
    );

    const pages = Math.ceil(filteredData.length / offset);
    const currentPage = Math.ceil(
      (filteredData.length - (filteredData.length - stop)) / offset
    );

    const jumpToPage = (page?: number) => {
      if (page) {
        const start = page * offset - offset;
        setStart(start);
      }
    };

    return (
      <Table rows={filteredData.length}>
        <PersonTableFilter
          data={data}
          setFilteredData={setFilteredData}
          setStart={setStart}
        />
        <TableHeader columnNames={columnNames} />
        <TableRow data={paginatedData} />
        <TableNavigation
          changePage={changePage}
          setOffset={setOffset}
          pages={pages}
          currentPage={currentPage}
          jumpToPage={jumpToPage}
        />
      </Table>
    );
  }

  return null;
};
