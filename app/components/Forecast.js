import React from "react";
import queryString from'query-string';
import Timestamp from 'react-timestamp';
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
                        <ul key={item.dt} className="item">
                          <li><Timestamp time={item.dt} format='date' /></li>
                          <li>{item.weather[0].description}</li>
                        </ul>
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
