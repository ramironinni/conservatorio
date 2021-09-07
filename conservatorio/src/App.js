import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import AddUser from './components/AddUser/AddUser';
import UserDetail from './components/UserDetail/UserDetail';

function App() {
    return (
        <Router>
            <div className="container-fluid bg-light px-0 App">
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/search/user-detail">
                            <UserDetail />
                        </Route>
                        <Route path="/search/:type">
                            <Search />
                        </Route>
                        <Route path="/add">
                            <AddUser />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
