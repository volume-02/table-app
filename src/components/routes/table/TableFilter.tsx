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
    from: moment(data.map((item: any) => item.dob)).min(),
    to: moment(data.map((item: any) => item.dob)).max()
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
        item.location.city.includes(filter.city)
      // &&
      // filter.date.from <= moment(item.dob) &&
      // moment(item.dob) <= filter.date.to
    );

    setFilteredData(filteredData);
    setStart(0);
  };

  console.log(
    "object",
    filter.date.from,
    moment("1993-02-08 11:04:13"),
    filter.date.to
  );

  const handleClear = () => {
    setFilter({ name: "", phone: "", city: "", date: completeDateRange });
  };

  const handleRange = range => {
    const [from, to] = range;
    setFilter({ ...filter, date: { from, to } });
  };

  useEffect(() => {
    filterData();
  }, [filter]);

  const handleChange = (target, property) => {
    setFilter({ ...filter, [property]: target.value });
  };

  console.log("filter", filter);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", width: 1200 }}
    >
      <Search
        placeholder="Начните вводить фамилию..."
        value={filter.name}
        onChange={({ target }) => handleChange(target, "name")}
      />
      <Search
        type="number"
        value={filter.phone}
        placeholder="Начните вводить телефон..."
        onChange={({ target }) => handleChange(target, "phone")}
      />
      <Search
        placeholder="Начните вводить город..."
        value={filter.city}
        onChange={({ target }) => handleChange(target, "city")}
      />
      <div style={{ width: 900 }}>
        <RangePicker
          // value={(filter.date.from, filter.date.to)}
          onChange={value => handleRange(value)}
        />
      </div>
      <Button type="primary" onClick={handleClear}>
        Очистить
      </Button>
    </div>
  );
};

export default TableFilter;
