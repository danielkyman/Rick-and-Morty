import React, { useEffect, useState } from 'react';
import Rick from './rick';
import './App.css';

const App = () => {


  const [ricks, setRicks] = useState([]);


  useEffect(() => {
    getRick()
  }, []);

  const getRick = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=19");
    const data = await response.json();
    setRicks(data.results);
    console.log(data.results);
  };


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {ricks.map(rick => (
        <Rick name={rick.name} status={rick.status} species={rick.species} gender={rick.gender} location={rick.location.name} image={rick.image} />
      ))}
    </div>
  );
}

export default App;
