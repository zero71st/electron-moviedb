import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <img className="card-img-top" src="/assets/poster1.png"></img>
                    <div className="card-body">
                        <div>
                            <h4 className="card-title">John Wrik</h4>
                            <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <a className="btn btn-outline-primary">See profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card">
                    <img className="card-img-top" src="/assets/poster2.png"/>
                    <div className="card-body">
                        <div>
                            <h4 className="card-title">John Wrik</h4>
                            <p className="card-text">{("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk...").substring(0,7)+"..."}</p>
                            <a className="btn btn-outline-primary">See profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card">
                    <img className="card-img-top" src="/assets/poster3.png"/>
                    <div className="card-body">
                        <div>
                            <h4 className="card-title">John Wrik</h4>
                            <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <a className="btn btn-outline-primary">See profile</a>
                        </div>
                    </div>
                </div>
            </div>

         </div>
      </div>
    )
  }
}
