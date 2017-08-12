// var React = require("react");
import React from "react";
import api from'../Apis/api';
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      searchCity: '',
      city: ''
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateSearch(event){
    event.preventDefault();

  }

  handleChange(event){
    let value = event.target.value;

    this.setState(function () {
        return {
          searchCity: value
        }
      });
  }

  render() {
    let match = this.props.match;
    console.log(match);

    return (
      <form className='home-container' onSubmit={this.updateSearch}>
        <h2>Enter a city and state</h2>
        <input onChange={this.handleChange} value={this.state.searchCity} placeholder="St,Melbourne,VIC" type="text" />
        {this.state.searchCity}
        <Link
           className='button'
           to={`/forecast?city=${this.state.searchCity}`}>
             Get Weather
         </Link>
      </form>
    )
  }
}

module.exports = Home;
