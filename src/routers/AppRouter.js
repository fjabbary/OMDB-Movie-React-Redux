
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar';
import App from '../App';
import MovieDetails from '../components/MovieDetails';
import { Provider } from 'react-redux';
import store from '../redux/store'

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/movie/:id" component={MovieDetails} exact={true} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default AppRouter;
