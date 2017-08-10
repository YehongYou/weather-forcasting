// var React = require("react");
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <form className='home-container'>
        <h2>Enter a city and state</h2>
        <input placeholder="St,Melbourne,VIC" type="text" />
        <button className='button' type='submit'>Get Weather</button>
      </form>
    )
  }
}

module.exports = Home;
