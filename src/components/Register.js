import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Content title="Email" placeholder="กรอก Email"/>
            </div>
        )
    }
}

const Content = ({ title, placeholder }) => {
    return (
        <div class="form-group">
            <label for={title}>{title}</label>
            <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder={placeholder} />

            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <strong>{title}</strong> 
            </div>
            
            <small id="emailHelpId" class="form-text text-muted">Help text</small>
        </div>
    );
};
