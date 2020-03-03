/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import Homepage from './react-components/Homepage';
import Loading from './react-components/Loading';
import Login from './react-components/Login';
import Register from './react-components/Register';
import RecoverPassword from './react-components/RecoverPassword';
import AdminPage from './react-components/AdminPage'
import Admin from './react-components/Admin'

class App extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    abc: new Date().toISOString().slice(0,10)
  }

  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
                            (<Loading state={this.state}/>)}/>
            <Route exact path='/homepage' render={() => 
                            (<Homepage state={this.state}/>)}/>
            <Route exact path='/login' render={() => 
                            (<Login state={this.state}/>)}/>
            <Route exact path='/register' render={() => 
                            (<Register state={this.state}/>)}/>
            <Route exact path='/recoverpassword' render={() => 
                            (<RecoverPassword state={this.state}/>)}/>
            <Route exact path='/adminpage' render={() => 
                            (<AdminPage state={this.state}/>)}/>
            <Route exact path='/admin' render={() => 
                            (<Admin state={this.state}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
