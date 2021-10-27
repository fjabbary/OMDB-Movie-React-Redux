import React, { Component } from 'react'
import { setQuery, fetchMovies } from '../redux/actions'
import { connect } from 'react-redux'

class SearchForm extends Component {

    submitHandler = e => {
        const { query, fetchMoviesFn } = this.props
        e.preventDefault()
        fetchMoviesFn(query)
    }

    render() {
        const { setQueryFn } = this.props

        return (
            <div className="form-container py-5 bg-light">
                <form className="container" onSubmit={this.submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="search" className="form-label">Search Movie:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="search"
                            aria-describedby="search"
                            onChange={e => setQueryFn(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    query: state.query
})

const mapDispatchToProps = dispatch => ({
    setQueryFn: query => dispatch(setQuery(query)),
    fetchMoviesFn: (text) => dispatch(fetchMovies(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
