import React, { Component } from 'react';
import './App.css';
import DATA from './data';

const { routes, airlines, airports } = DATA;

const App = () => (
  <div className="app">
  <header className="header">
    <h1 className="title">Airline Routes</h1>
  </header>
  <section>
    <table>
      <thead>
        <tr>
          <th>Airline</th>
          <th>Source</th>
          <th>Destination</th>
        </tr>
      </thead>
      <tbody>
        {routes.map(({ airline, src, dest }) =>
          <tr>
            <td>{airline}</td>
            <td>{src}</td>
            <td>{dest}</td>
          </tr>
        )}
      </tbody>  
    </table>
  </section>
</div>
);

export default App;