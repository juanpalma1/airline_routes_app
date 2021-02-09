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
  
  const filteredOptions = (group) => {
    let property;
    let name = 'All ';
    let array;
    
    if (group === 'airlines') {
      property = 'id';
      name += 'Airlines';
      array = airlines;
    } else {
      property = 'code';
      name += 'Airports';
      array = airports;
    }
    
    const all = {
      [property]: 'all',
      name,
    };
    
    return [all, ...array].map(item => {
      const invalid = !filteredRoutes.some(route => {
        return group === 'airlines' ?
          route.airline === item[property] :
          route.src === item[property] || route.dest === item[property];
      });
      
      
      return (
        <option
          key={item[property]}
          value={item[property]}
          disabled={invalid}
        >
          {item['name']}
        </option>
      );
    });
  };
  
  const handleAirlineChange = (event) => {
    setAirline(event.target.value);
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
          options={filteredOptions}
          onChange={handleAirlineChange}
        />
        <Select
          label='Flying in or out of'
          name='airports'
          value={airport}
          options={filteredOptions}
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