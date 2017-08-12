var React = require("react");
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home');
var Forecast = require('./Forecast');
var Nav = require('./Nav');


class App extends React.Component{
  render(){
    return (
      <Router>
       <div className='container'>
         <Nav />

         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/forecast' component={Forecast} />
           <Route render={function () {
             return <p>Not found the page</p>
           }} />
         </Switch>
       </div>
     </Router>
    )
  }
}

module.exports = App;
