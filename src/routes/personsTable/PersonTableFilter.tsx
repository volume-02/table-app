import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import TableFilter from 'common/Table/TableFilter';
import { IPerson, IFilter } from 'types/types';

interface IPersonTableFilterProps {
  data: Array<IPerson>;
  setFilteredData: (filteredData: Array<IPerson>) => void;
  setStart: (value: number) => void;
}

const PersonTableFilter: React.FC<IPersonTableFilterProps> = ({
  data,
  setFilteredData,
  setStart
}) => {
  const completeDateRange = {
    from: moment.min(data.map((item: IPerson) => moment(item.dob))),
    to: moment.max(data.map((item: IPerson) => moment(item.dob)))
  };

  const [filter, setFilter] = useState<IFilter>({
    name: '',
    phone: '',
    city: '',
    date: completeDateRange
  });

  const filterData = () => {
    const filteredData = data.filter(
      (item: IPerson) =>
        item.name.last.includes(filter.name) &&
        item.phone.replace(/\D+/g, '').includes(filter.phone) &&
        item.location.city.includes(filter.city) &&
        filter.date.from <= moment(item.dob) &&
        moment(item.dob) <= filter.date.to
    );

    setFilteredData(filteredData);
    setStart(0);
  };

  const handleClear = () => {
    setFilter({ name: '', phone: '', city: '', date: completeDateRange });
  };

  const handleRange = (range: RangePickerValue) => {
    const [from, to] = range;
    if (from && to) {
      setFilter({ ...filter, date: { from, to } });
    } else {
      setFilter({
        ...filter,
        date: { from: completeDateRange.from, to: completeDateRange.to }
      });
    }
  };

  useEffect(() => {
    filterData();
  }, [filter]);

  useEffect(() => {
    setFilter({
      ...filter,
      date: { from: completeDateRange.from, to: completeDateRange.to }
    });
  }, [data]);

  const handleChangeFilter = (target: EventTarget, property: string) => {
    var element = target as HTMLInputElement;
    setFilter({ ...filter, [property]: element.value });
  };

  return (
    <TableFilter
      filter={filter}
      handleChangeFilter={handleChangeFilter}
      handleRange={handleRange}
      handleClear={handleClear}
    />
  );
};

export default PersonTableFilter;
