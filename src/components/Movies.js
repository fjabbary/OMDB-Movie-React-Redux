import React, { Component } from 'react';
import { connect } from 'react-redux'
import Movie from './Movie'
import Spinner from './Spinner';

class Movies extends Component {
    render() {
        const { movies, loading } = this.props;

        const moviesJSX = movies.length !== 0 ? movies.Search.map(movie => <Movie key={movie.imdbID} movie={movie} />) : null
        return (
            <div className="container my-5 container-movies">
                {loading ? <Spinner /> : moviesJSX}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    loading: state.loading
})

export default connect(mapStateToProps, null)(Movies);
