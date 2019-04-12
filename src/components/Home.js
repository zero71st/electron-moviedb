import React, { Component } from 'react'
import axios from 'axios';
import MovieItem from '../components/MovieItem';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.search('trans');
    }

    search = (keyword) => {

        var items = [];

        var url = "https://api.themoviedb.org/3/search/movie?api_key=1f310c2131d57ed5d378570c82d484a8&query=" + keyword;
        axios.get(url)
            .then(results => {
                results.data.results.forEach(item => {

                    item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path;
                    items.push(item)
                });

                this.setState({
                    movies: items
                });
            })
    }

    render() {
        return (
            <div class="container">
                <input type="text" placeholder="Search movie" className="form-control col-xl-4" onChange={(e) => this.search(e.target.value)} style={{margin:10}} ></input>
                <hr/>
                <div class="row">
                    {this.state.movies.map(item =>
                        <MovieItem movie={item} />
                        )}
                </div>
            </div>
        );
    }
}
