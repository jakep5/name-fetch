import React from 'react';
import DemonymDisplay from './DemonymDisplay/DemonymDisplay';
import CountrySelector from './CountrySelector/CountrySelector';
import './App.css';

class DemonymApp extends Component {
  render() {
    return (
      <div className = "demonym_app">
        <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
        <DemonymDisplay name="Barbadian" country="Barbados" />
      </div>
    )
  }
}

export default DemonymApp