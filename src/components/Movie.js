import React from 'react'
import { Link } from 'react-router-dom'

function Movie(props) {
    const { movie } = props;

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={movie.Poster} className="card-img-top" alt={movie.title} />
            <div className="card-body text-center w-100">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    )
}

export default Movie
