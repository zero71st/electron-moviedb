import React, { Component } from 'react'
import './Login.css'
import fire from '../configs/fire'
import App from '../App';

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:'',
         currentUser:null,
         message:''
      }
    }

    componentDidMount() {
        fire
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    this.SetState(state => ({
                        ...state.currentUser,
                        currentUser: user
                    }))
                }
            })
    }
    
    handleFormSubmit=(e)=>{
        e.preventDefault();

        const { username, password } = this.state;

        fire
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((response) => {
                this.setState({
                    currentUser: response.user
                });

                if(this.state.currentUser)
                    this.props.onLogin(this.state.currentUser)
            })
            .catch((error) => {
                this.setState({
                    message: error.message
                });
            });
        
        this.writeLog();
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

    handleLogout=(e)=> {
        e.preventDefault();

        fire
            .auth()
            .signOut()
            .then(()=>{
                this.setState({
                    currentUser:null
                })
            })
    }

    writeLog(){
        console.log(JSON.stringify(this.state));
    }

    showMessage(){
        if(this.state.message !== '')
            return <p className="alert alert-danger col-12">{this.state.message}</p>
    }

    render() {

        const { currentUser } = this.state;

        // if (currentUser) {
        //     return (
        //         <div className="container">
        //             <div className="row">
        //                 <p className="col-md-10">
        //                     Hello {currentUser.email}
        //                 </p>
        //                 <button 
        //                     className="col-md-2 btn btn-primary"
        //                     onClick={this.handleLogout}
        //                 >
        //                     Logout
        //                 </button>
        //             </div>
        //         </div>
        //     );
        // }

        if (currentUser){
            return <App/>
        }


        return (
            <div class="container">
                <div class="row">
                    {this.showMessage}
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
