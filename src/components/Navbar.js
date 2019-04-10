import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = { keyword: '' }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <a className="navbar-brand" href="/">MY Movie DB</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/myform" >My Form</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mylayout" >My Layout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/card">Card</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/responsive">Responsive Form</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/parent">Parent - child comunicate</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Signup</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/spread">Spread</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/validation">Form-validation</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input  className="form-control mr-sm-2"
                                    type="search" 
                                    placeholder="Search"
                                    aria-label="Search" 
                                    onChange={(event) => {
                                         this.props.onSearch(event.target.value);
                                         event.preventDefault(); }
                                    }/>
                            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.props.onHello}>Search</button> */}
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
