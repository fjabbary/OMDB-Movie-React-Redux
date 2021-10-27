import { SET_QUERY, FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE, FETCH_SINGLE_MOVIE } from './actionsTypes'


const initialState = {
    query: '',
    movies: [],
    movie: {},
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }

        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }

        case FETCH_REQUEST_FAILURE:
            return {
                ...state,
                loading: false
            }

        case FETCH_SINGLE_MOVIE:
            return {
                ...state,
                movie: action.payload
            }

        default:
            return state;
    }
}

export default reducer;