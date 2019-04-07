import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MyForm from "./components/MyForm";
import Navbar from './components/Navbar';
import Error from './components/Error';
import MyLayout from './components/MyLayout';
import Card from './components/Card';
import ResponsiveForm from './components/ResponsiveForm';

export default class App extends Component {

  render() {
    return (

      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/myform' component={MyForm} />
            <Route path='/mylayout' component={MyLayout}/>
            <Route path='/card' component={Card}/>
            <Route path='/responsive' component ={ResponsiveForm}/>
            <Route component={Error}/>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}