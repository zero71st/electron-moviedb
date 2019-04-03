import React, { Component } from 'react'
import { Z_BLOCK } from 'zlib';

export default class MovieItem extends Component {
  constructor(props){
    super(props)
  }

  

  render() {

    const { id, title, overview, poster_src } = this.props.movie;

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={poster_src} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{overview}</p>
              <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
