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
import Parent from './components/Parent';
import Signup from './components/Signup';
import SpreadAttribute from './components/SpreadAttribute';
import FormValidation from './components/FormValidation';
import fire from 'firebase';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: {},
    }
  }

  componentDidMount() {
    fire
        .auth()
        .onAuthStateChanged(user => {
            if (user) {
                this.setState({currentUser:user});
            }
          })
  }

  handleLogin = (user) =>{
    this.setState(prevState=>({
      currentUser:user
    }),
      ()=> console.log(user)
    )
  }

  handleLogout = () => {
    fire.auth()
        .signOut().then(()=>{
          this.setState({currentUser:null})
        })
  }

  render() {
    if (!this.state.currentUser)
    {
      return <Login  onLogin={this.handleLogin}/>
    }
      
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <button 
            type="button" 
            onClick={this.handleLogout}
            class="btn btn-primary">
            Logout
            </button>
          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/register' component={Register} />
              <Route path='/myform' component={MyForm} />
              <Route path='/mylayout' component={MyLayout}/>
              <Route path='/card' component={Card}/>
              <Route path='/responsive' component ={ResponsiveForm}/>
              <Route path='/parent' component = {Parent}/> 
              <Route path='/signup' component = {Signup}/>
              <Route path='/spread' component = {SpreadAttribute}/>
              <Route path='/validation' component= {FormValidation}/>
              <Route component={Error}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}