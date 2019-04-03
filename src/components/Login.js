import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
    }
    
    render() {
        return (
            <div class="container">
                <form onSubmit={(e)=> { 
                    alert(JSON.stringify(this.state));
                    e.preventDefault();
                }}>
                    <div class="form-group">
                        <label for="">Username:</label>
                        <input onChange={(e)=> this.setState({username:e.target.value})}
                               type="text"
                               class="form-control" 
                               name="" id=""
                               placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="">Password:</label>
                        <input onChange={(e) => this.setState({password:e.target.value})}
                               type="password"
                               class="form-control"
                               name="" 
                               id="" 
                               placeholder="" />
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
