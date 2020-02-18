import React, { useEffect, useState } from 'react';
import Rick from './rick';
import './App.css';

const App = () => {


  const [ricks, setRicks] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    getRick()
  }, []);

  const getRick = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=19");
    const data = await response.json();
    setRicks(data.results);
    console.log(data.results);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"
          value={search}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      {ricks.map(rick => (
        <Rick
          key={rick.name}
          name={rick.name}
          status={rick.status}
          species={rick.species}
          gender={rick.gender}
          location={rick.location.name}
          image={rick.image}
        />
      ))}
    </div>
  );
}

export default App;
