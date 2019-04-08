import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"Title A"
        }
    }

    changeTitle=(value)=>{
        this.setState({
            title:value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-success">
                            {this.state.title}
                        </div>                
                        {<Child title={this.state.title} changeParentTitle={this.changeTitle}/>}    
                    </div>
                </div>
            </div>
        )
    }
}
