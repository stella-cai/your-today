/* New cleaned up version of App.js */
import React from 'react';
import { Redirect } from 'react-router';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// Importing the Queue and our simple Home Page
import {Homepage} from './Homepage';
import {Loading} from './Loading';
import {Login} from './Login';
import {Register} from './Register';
import {RecoverPassword} from './RecoverPassword';
import {Admin} from './Admin'
import {Middleware} from "./actions/middleware";

class App extends React.Component {
  constructor(props) {
    super(props);
    Middleware.checkLoggedin(this); // sees if a user is logged in.
  }

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    currentUser: null,
    abc: new Date().toISOString().slice(0,10)
  }

  render() {
    const currentUser = this.state.currentUser;
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            {currentUser&&currentUser.status==0&&<Route exact path="/" render={() => (<Homepage app = {this} state={this.state} />)} />}
            {currentUser&&currentUser.status==2&&<Route exact path="/" render={() => (<Admin app = {this} state={this.state} />)} />}
            {currentUser&&currentUser.status==1&&<Route exact path="/" render={() => (<Loading to="/" />)} />}
            {!currentUser&&<Route exact path="/" render={() => (<Loading app = {this} state={this.state} />)} />}

            <Route exact path='/login' render={() => 
                            (currentUser ? <Redirect to="/" /> : <Login state={this.state}/>)}/>
            <Route exact path='/register' render={() => 
                            (<Register state={this.state}/>)}/>
            <Route exact path='/recoverpassword' render={() => 
                            (<RecoverPassword state={this.state}/>)}/>
            {/* <Route exact path='/admin' render={() => 
                            (currentUser&&currentUser.status==2 ? <Admin state={this.state}/> : <Redirect to="/" />)}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
