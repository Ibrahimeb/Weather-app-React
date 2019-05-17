import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';


const citiesList = [
"Buenos Aires,ar",
"Bogota,col",
"Caracas,ve",
"Washington,us",
"Madrid,es",
"Lima,pe"

]


class App extends Component {
  render() {
    return (
      <div className="App">
          <LocationList cities = {citiesList}  />
      </div>
    );
  }
}

export default App;
