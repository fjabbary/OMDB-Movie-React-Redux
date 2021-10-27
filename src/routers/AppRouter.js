
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar';
import App from '../App';
import MovieDetails from '../components/MovieDetails';
import { Provider } from 'react-redux';
import store from '../redux/store'

const AppRouter = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/movie/:id" component={MovieDetails} exact={true} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default AppRouter;
