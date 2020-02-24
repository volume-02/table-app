import React from 'react';

interface Props {
  changePage: (next?: boolean) => void;
  setOffset: (offset: number) => void;
  jumpToPage: (page: number) => void;
  pages: number;
  currentPage: number;
}

const TableNavigation: React.FC<Props> = ({
  changePage,
  setOffset,
  pages,
  currentPage,
  jumpToPage
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 1200
      }}
    >
      <button onClick={() => changePage(false)}>сюда</button>
      <select
        name="select"
        defaultValue="10"
        onChange={e => setOffset(+e.target.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <p>pages: {pages}</p>
      <input type="number" onChange={e => jumpToPage(+e.target.value)} />
      <p>currentPage: {currentPage}</p>
      <button onClick={() => changePage()}>туда</button>
    </div>
  );
};

export default TableNavigation;
