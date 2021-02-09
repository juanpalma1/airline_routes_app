import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Select from './components/Select';
import DATA from './data';

const App = () => {
  const [ airline, setAirline ] = useState('all');
  const [ airport, setAirport ] = useState('all');
  
  const {
    routes,
    airlines,
    airports,
    getAirlineById,
    getAirportByCode
  } = DATA;
  
  const filteredRoutes = routes.filter(route => {
    return (Number(airline) === route.airline || airline === 'all') &&
      (airport === route.src || airport === route.dest || airport === 'all');
  });
  
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];
  
  const formatValue = (property, value) => {
    return property === 'airline' ?
      getAirlineById(value) : getAirportByCode(value);
  };
  
  const filteredAirlines = () => {
    const all = {
      id: 'all',
      name: 'All Airlines'};
    
    return [all, ...airlines].map(({ id, name }) => {
      return <option key={id} value={id}>{name}</option>;
    });
  };
  
  const handleAirlineChange = (event) => {
    setAirline(event.target.value);
  };
  
  const filteredAirports = () => {
    const all = {
      code: 'all',
      name: 'All Airports'};
    
    return [all, ...airports].map(({ code, name }) => {
      return <option key={code} value={code}>{name}</option>;
    });
  };
  
  const handleAirportChange = (event) => {
    setAirport(event.target.value);
  };
  
  const clearFilters = () => {
    setAirline('all');
    setAirport('all');
  };
  
  const defaultsSelected = airline === 'all' && airport === 'all';
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Select
          label='Showing routes on'
          name='airlines'
          value={airline}
          options={filteredAirlines}
          onChange={handleAirlineChange}
        />
        <Select
          label='Flying in or out of'
          name='airports'
          value={airport}
          options={filteredAirports}
          onChange={handleAirportChange}
        />
        <button onClick={clearFilters} disabled={defaultsSelected}>
          Show All Routes
        </button>
        
        <Table
          className="routes-table"
          columns={columns}
          rows={filteredRoutes}
          format={formatValue}
        />
      </section>
    </div>
  );
};

export default App;