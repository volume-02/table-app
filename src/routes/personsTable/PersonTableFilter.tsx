import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import TableFilter from '../../common/Table/TableFilter';

interface Props {
  data: Array<Object>;
  setFilteredData: (filteredData: Array<Object>) => void;
  setStart: (value: number) => void;
}

const PersonTableFilter: React.FC<Props> = ({
  data,
  setFilteredData,
  setStart
}) => {
  const completeDateRange = {
    from: moment.min(data.map((item: any) => moment(item.dob))),
    to: moment.max(data.map((item: any) => moment(item.dob)))
  };

  const [filter, setFilter] = useState<any>({
    name: '',
    phone: '',
    city: '',
    date: completeDateRange
  });

  const filterData = () => {
    const filteredData = data.filter(
      (item: any) =>
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
    if (range.length) {
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

  const handleChangeFilter = (target: any, property: string) => {
    setFilter({ ...filter, [property]: target.value });
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
