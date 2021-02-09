import React, { useState } from 'react';

const Table = ({
  columns,
  rows: routes,
  format,
  className,
  perPage = 25
}) => {
  const [ page, setPage ] = useState(0);
  
  const headerCells = columns.map(column => {
    return <th key={column.name}>{column.name}</th>;
  });
  
  const start = page * perPage;
  
  const bodyRows = routes.slice(start, start + perPage).map(route => {
    const row = columns.map(({ property }) => {
      const value = route[property];
      return <td key={property + value}>{format(property, value)}</td>;
    });
    
    return <tr key={Object.values(route).join(':')}>{row}</tr>;
  });
  
  const paginationMessage = `Showing ${start + 1} - ` +
    `${bodyRows.length} of ${routes.length} total routes`;
    
  const previousPage = () => {
    setPage(page - 1);
  };
  
  const nextPage = () => {
    setPage(page + 1);
  };
  
  const disablePreviousButton = () => page === 0;
  
  const disableNextButton = () => {
    return routes.length - start <= perPage;
  };
    
  return (
    <div>
      <table className={className}>
        <thead>
          <tr>{headerCells}</tr>
        </thead>
        <tbody>{bodyRows}</tbody>
      </table>
      <div className="pagination">
        <p>{paginationMessage}</p>
        <button type="button"
                onClick={previousPage}
                disabled={disablePreviousButton()}
        >
          Previous Page
        </button>
        <button type="button"
                onClick={nextPage}
                disabled={disableNextButton()}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Table;