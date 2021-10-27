import axios from 'axios';
import { SET_QUERY } from "./actionsTypes";
import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE, FETCH_SINGLE_MOVIE } from './actionsTypes'
import { apiKey } from '../apiKey'

export const setQuery = (query) => ({
    type: SET_QUERY,
    payload: query
})

export const fetchMovies = (text) => dispatch => {
    dispatch({
        type: FETCH_REQUEST
    })

    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${text}`)
        .then(res => {
            dispatch({
                type: FETCH_REQUEST_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_REQUEST_FAILURE,
                payload: err.message
            })
        })
}

export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(res => {
            dispatch({
                type: FETCH_SINGLE_MOVIE,
                payload: res.data
            })
        })
}