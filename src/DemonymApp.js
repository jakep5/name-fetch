import React from 'react';
import DemonymDisplay from './DemonymDisplay/DemonymDisplay';
import CountrySelector from './CountrySelector/CountrySelector';
import './App.css';

class DemonymApp extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      countries: [],
      selected: null
    }
  }
  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then (response => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        else {
          return response;
        }
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
          .map(key => data[key].item[0])
        this.setState({
          countries: countries
        })
      })
      .catch(err => {
        this.setState({
          error:err.message
        });
      });
  }

  setSelected(selected) {
    this.setState ({
      selected: selected
    });
  }
  render() {
    const demon = this.state.selected
      ? <DemonymDisplay name={this.state.selected['citizen-names']} country = {this.state.selected.name} />
      : <div className = "demonym_app__placeholder">Select a country above</div>

    const error = this.state.error
      ? <div className = "demonym_app_error">{this.state.error}</div>
      : "";

    return (
      <div className = "demonym_app">
        <CountrySelector countries={this.state.countries} changeHandler = {selected => this.setSelected(selected)}/>
        {demon}
      </div>
    )
  }
}

export default DemonymApp