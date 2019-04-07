import React, { Component } from 'react'
import poster1 from '../poster1.png'
import poster2 from '../poster2.png'
import poster3 from '../poster3.png'

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <div className="card">
                    <img className="card-img-top" src={poster1}/>
                    <div className="card-body">
                        <div>
                            <h4 className="card-title">John Wrik</h4>
                            <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <a className="btn btn-outline-primary">See profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="card">
                    <img className="card-img-top" src={poster2}/>
                    <div className="card-body">
                        <div>
                            <h4 className="card-title">John Wrik</h4>
                            <p className="card-text">kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                            <a className="btn btn-outline-primary">See profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-2">
                <div className="card">
                    <img className="card-img-top" src={poster3}/>
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
