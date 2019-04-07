import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:this.props.title,
    }
  }
  
  changeTitle=()=>{
      this.props.changeParentTitle(this.state.title);
}

  render() {
    return (
      <div className="col-12">
        <div class="form-group">
            <label for="">Title Name</label>
            <input type="text"
                value={this.state.title}
                onChange={(e) => this.setState({
                     title: e.target.value 
                })}
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="title name" />
            <small id="helpId" class="form-text text-muted">Help text</small>
        </div>
        <button type="button"
            onClick={this.changeTitle}
            class="btn btn-primary">Change Title</button>
      </div>
    )
  }
}
