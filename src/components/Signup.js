import React, { Component } from 'react';
import SignupForm from './SignupForm';

export default class Signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        fields:{}
    }
  }

  onSubmit = (updateValue)=> {
      this.setState({
        fields:{
          ...this.state.fields,
          ...updateValue
        },
      });

      console.log(JSON.stringify(this.state.fields));
  }

  render() {
    return (
      <div>
        <SignupForm onSubmit={this.onSubmit}/>

        <div className="col-12">
              <p className="alert alert-success">{JSON.stringify(this.state.fields)}</p>
        </div>

      </div>
    )
  }
}
