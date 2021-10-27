import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMovie } from '../redux/actions'
import { Link } from 'react-router-dom'

class MovieDetails extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchMovieFn(id)
        console.log(this.props)
    }

    render() {
        const { Title, Year, Released, Runtime, Actors, Genre, Plot, Ratings, Poster } = this.props.movie
        return (
            <div className="container container-movieDetail my-5">
                <div className="left-img">
                    <img src={Poster} alt="" />
                </div>
                <div className="right-detail ms-5">
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Title: </strong>{Title}</li>
                        <li className="list-group-item"><strong>Year: </strong>{Year}</li>
                        <li className="list-group-item"><strong>Release Date: </strong>{Released}</li>
                        <li className="list-group-item"><strong>Duration: </strong>{Runtime}</li>
                        <li className="list-group-item"><strong>Actors: </strong>{Actors}</li>
                        <li className="list-group-item"><strong>Genre: </strong>{Genre}</li>
                        <li className="list-group-item"><strong>Details: </strong>{Plot}</li>
                        <li className="list-group-item"><strong>Ratings: </strong><br /><br />
                            <ul className="list-group ">
                                {Ratings ?
                                    Ratings.map((Rating, index) => <li key={index} className="list-group-item ratings-list-item"><strong>{Rating.Source}: </strong> {Rating.Value}</li>) : null
                                }
                            </ul>

                        </li>

                    </ul>
                    <Link to="/" className="my-3 btn btn-warning">Go Back</Link>

                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie
})

const mapDispatchToProps = dispatch => ({
    fetchMovieFn: (id) => dispatch(fetchMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
