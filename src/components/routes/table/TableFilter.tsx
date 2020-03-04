import React, { useState, useEffect } from "react";
import { Input, Button, DatePicker } from "antd";
import moment from "moment";

interface Props {
  filterLastName: (name: String) => void;
  filterPhone: (phoneNumber: String) => void;
}

const TableFilter: React.FC<Props> = ({ data, setFilteredData, setStart }) => {
  const { Search } = Input;
  const { RangePicker } = DatePicker;

  const completeDateRange = {
    from: moment.min(data.map((item: any) => moment(item.dob))),
    to: moment.max(data.map((item: any) => moment(item.dob)))
  };

  const [filter, setFilter] = useState({
    name: "",
    phone: "",
    city: "",
    date: completeDateRange
  });

  const filterData = () => {
    const filteredData = data.filter(
      (item: any) =>
        item.name.last.includes(filter.name) &&
        item.phone.replace(/\D+/g, "").includes(filter.phone) &&
        item.location.city.includes(filter.city) &&
        filter.date.from <= moment(item.dob) &&
        moment(item.dob) <= filter.date.to
    );

    setFilteredData(filteredData);
    setStart(0);
  };

  // console.log(
  //   "date",
  //   filter.date.from > moment("1993-02-08 11:04:13"),
  //   moment.min(data.map((item: any) => item.dob)),
  //   filter.date.from <= moment(data[0].dob) &&
  //     moment(data[0].dob) <= filter.date.to
  //   // filter.date.to
  // );

  console.log(
    "completeDateRange",
    completeDateRange.from,
    completeDateRange.to
  );

  const handleClear = () => {
    setFilter({ name: "", phone: "", city: "", date: completeDateRange });
  };

  const handleRange = range => {
    const [from, to] = range;
    if (range.length) {
      setFilter({ ...filter, date: { from, to } });
    } else {
      setFilter({
        ...filter,
        date: { from: completeDateRange.from, to: completeDateRange.to }
      });
    }
    console.log("from, to", from, to, range);
    console.log("filter.date", filter.date.from, filter.date.to);
  };

  useEffect(() => {
    filterData();
  }, [filter]);

  const handleChangeFilter = (target, property) => {
    setFilter({ ...filter, [property]: target.value });
  };

  console.log("filter", filter.date.from.format("YYYY-MM-DD HH:mm:ss"));

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: 1200 }}
    >
      <Search
        placeholder="Начните вводить фамилию..."
        value={filter.name}
        onChange={({ target }) => handleChangeFilter(target, "name")}
      />
      <Search
        type="number"
        value={filter.phone}
        placeholder="Начните вводить телефон..."
        onChange={({ target }) => handleChangeFilter(target, "phone")}
      />
      <Search
        placeholder="Начните вводить город..."
        value={filter.city}
        onChange={({ target }) => handleChangeFilter(target, "city")}
      />
      <div style={{ width: 900 }}>
        <RangePicker
          onChange={value => {
            console.log("value", value);
            handleRange(value);
          }}
        />
      </div>
      <Button type="primary" onClick={handleClear}>
        Очистить
      </Button>
    </div>
  );
};

export default TableFilter;
