import React, { Component } from 'react';

const Table = ({ columns, rows: routes, format }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        {routes.map(({ airline, src, dest }) => {
          return (
            <tr>
              <td>{format(columns[0]['property'], airline)}</td>
              <td>{format(columns[1]['property'], src)}</td>
              <td>{format(columns[2]['property'], dest)}</td>
            </tr>
          );
        })}
      </tbody>  
    </table>
  );
};

export default Table;