import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Navbar from './components/Navbar';
import MovieItem from './components/MovieItem';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = { movies:[{id:"12344"}]}
  }

  componentDidMount(){
    this.search('trans');
  }

  search = (keyword)=> {
    var items = [];
    var url = "https://api.themoviedb.org/3/search/movie?api_key=1f310c2131d57ed5d378570c82d484a8&query=" + keyword;
    axios.get(url)
      .then(results => {
        //   console.log(JSON.stringify(results))
        results.data.results.forEach(item => {

          item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path;
          items.push(item)
        });

        this.setState({ movies: items });
      })
        
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <input className="form-control mr-sm-2" type="search" onChange={(event) => this.search(event.target.value)} placeholder="Search" aria-label="Search" />

        {this.state.movies.map(item =>
          <MovieItem movie={item} />
        )}

      </div>
    );
  }
}