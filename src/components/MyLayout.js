import React, { Component } from 'react'
import '../components/MyLayout.css';

export default class MyLayout extends Component {
    render() {
        return (
            <div className="container-fluid my-container">
                {/* row = 12 columns */}
                <div className="row my-row">
                    <div class="col my-col">
                        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Button1</button>
                    </div>
                    <div class="col my-col">
                        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Button1</button>
                    </div>
                    <div class="col my-col">
                        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Button1</button>
                    </div>    
                    <div className="col-xl-12">

                    </div>
                </div>
                <div className="row my-row">
                    <div class="col-lg my-col">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="col-lg my-col">
                        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Button1</button>
                    </div>
                    <div class="col-lg my-col">
                        <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Button1</button>
                    </div>    
                </div>

                <div className="row text-center my-row">
                    <div className="col-xm-12 col-sm-6 col-md-4 my-col">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                    <div className="col-xm-12 col-sm-6 col-md-4 my-col">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                    <div className="col-xm-12 col-sm-6 col-md-4 my-col">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                </div>
            </div>
        )
    }
}
