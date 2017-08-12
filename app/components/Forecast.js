import React from "react";
import queryString from'query-string';
import Timestamp from 'react-timestamp';
import {Link} from'react-router-dom';
import api from'../Apis/api';
import Loading from'./Loading.js';

class Forecast extends React.Component {
   constructor(props){
     super(props);
     this.state = {
      weatherForecast: null,
      error:null,
      loading: true
      }
   }

   componentDidMount() {
      let city = queryString.parse(this.props.location.search).city;

      api.get5DayForecast(city).then((res)=>{
        console.log(res.list);
        if (res === null) {
         return this.setState(function () {
          return {
          error: 'Looks like there was an error. Check the city name if it exist.',
          loading: false,
          }
         });
        }

        this.setState(function () {
            return {
              weatherForecast: res.list,
              error: null,
              loading: false
            }
          });

      })

   }
   render(){
     var data = queryString.parse(this.props.location.search);
     return(
       <div className='forecast-container'>

           {!this.state.weatherForecast
             ? <Loading />
             : <div>
                  <h2>{data.city}</h2>
                  <div className='weather-list'>
                  {this.state.weatherForecast.map(function(item){
                     return (
                        <Link to={'/'}><ul key={item.dt} className="item">
                          <li><Timestamp time={item.dt} format='date' /></li>
                          <li>{item.weather[0].description}</li>
                          <li>Humidity: {item.humidity}</li>
                          <li>Min: {item.temp.min}</li>
                          <li>Max: {item.temp.max}</li>
                        </ul></Link>
                     )
                  })}
                  </div>
               </div>
           }
       </div>
     )
   }
}

module.exports = Forecast;
