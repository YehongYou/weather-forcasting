var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li className="brand">
         <h2>Weather Forecasting</h2>
      </li>
      <li className="search-input">
         <input placeholder="St,Melbourne,VIC" type="text"/>
         <button className='button' type='submit'>Get Weather</button>
      </li>
    </ul>
  )
}

module.exports = Nav;
