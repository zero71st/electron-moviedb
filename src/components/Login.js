import React, { Component } from 'react'
import './Login.css'
import Fire from '../configs/fire'
import fire from '../configs/fire';

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
    }
    
    handleFormSubmit=(e)=>{
      e.preventDefault();

    }

    handleTextChange=(e)=>{
        const {name,value} = e.target;

        this.setState(state =>({
            ...state,
            [name]:value,
        }),
            ()=>  this.writeLog()
        );
    }

    writeLog(){
        console.log(JSON.stringify(this.state));
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                <div className="col-6 card">
                <form onSubmit={this.handleFormSubmit}>
                    <div class="form-group">
                        <label for="">Username</label>
                        <input 
                            onChange={this.handleTextChange}
                            type="text"
                            class="form-control" 
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input 
                            onChange={this.handleTextChange}
                            type="password"
                            class="form-control"
                            name="password"
                            id="password" 
                            placeholder="Enter your password"
                        />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary col-4">Login</button>
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
