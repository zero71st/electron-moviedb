import React, { Component } from 'react'
import './SignupForm.css';

export default class SignupForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       firstname:'',
       lastname:'',
       password:'',
       confirm_password:'',
       email:'',
       phone:'',
       answer:'',
    }
  }
  
  onTextChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
  }

  onSubmit=(e)=>{
     // alert(JSON.stringify(this.state));
      e.preventDefault();
      this.props.onSubmit(this.state);

      this.setState({
        firstname:'',
        lastname:'',
        password:'',
        confirm_password:'',
        email:'',
        phone:'',
        answer:'',
      });
  }

  render() {
    return (
      <div>
        <div class="container">
          <p className="alert alert-info text-center">Apply as a Employee</p>
          {/* <hr/> */}
          
          <form >
          <div class="row">
            <div className="col-md-6">
              <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="firstname" id="" aria-describedby="helpId" placeholder="First Name*" />
              </div>

              <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="lastname" id="" aria-describedby="helpId" placeholder="Last Name*" />
              </div>

              <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="password" id="" aria-describedby="helpId" placeholder="Password*" />
              </div>

              <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="confirm_password" id="" aria-describedby="helpId" placeholder="Confirm Password*" />
              </div>

            </div>
            <div className="col-md-6">
            <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="email" id="" aria-describedby="helpId" placeholder="Your Email*" />
              </div>

              <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="phone" id="" aria-describedby="helpId" placeholder="Your Phone*" />
              </div>

              <div class="form-group">
                <input type="text" onChange={this.onTextChange}
                  class="form-control" name="answer" id="" aria-describedby="helpId" placeholder="Enter Your Answer*" />
              </div>

              <button type="submit" onClick={(e)=>this.onSubmit(e)} class="btn btn-primary col-sm-12 col-md-3">Register</button>

            </div>
      
          </div>
            </form>
          
        </div>
      </div>
    )
  }
}
