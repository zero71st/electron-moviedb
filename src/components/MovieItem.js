import React, { Component } from 'react'
import './MovieItem.css';

export default class MovieItem extends Component {
  constructor(props){
    super(props)

      
  }

  render() {

    const { id, title, overview, poster_src } = this.props.movie;

    return (
      // <div className="card mb-3">
      //   <div className="row no-gutters">
      //     <div className="col-md-4">
      //       <img src={poster_src} className="card-img" alt="..." />
      //     </div>
      //     <div className="col-md-8">
      //       <div className="card-body">
      //         <h5 className="card-title">{title}</h5>
      //         <p className="card-text">{overview}</p>
      //         <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
        <img src={poster_src} className="img-fluid" alt={id}></img>
        <h4 className="display-8">{title}</h4>
        {/* <p>{overview}></p> */}
      </div>
    )
  }
}
