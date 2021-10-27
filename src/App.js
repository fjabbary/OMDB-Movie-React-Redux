import React, { Component } from 'react'
import './App.css';
import Movies from './components/Movies';

import SearchForm from './components/SearchForm';


export default class App extends Component {
    render() {
        return (
            <div>
                <SearchForm />
                <Movies />
            </div>
        )
    }
}
