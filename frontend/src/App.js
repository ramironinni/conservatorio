import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import UserDetail from './components/UserDetail/UserDetail';
import Footer from './components/Footer/Footer';
import AddRecord from './components/Add/AddRecord/AddRecord';
import AddUser from './components/Add/AddUser/AddUser';
import MainHeader from './components/MainHeader/MainHeader';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import UserProfile from './components/User/UserProfile';
import UserConfiguration from './components/User/UserConfiguration';

function App() {
    const authCtx = useContext(AuthContext);

    if (!authCtx.isLoggedIn) {
        return <Login />;
    }

    return (
        <Router>
            <div className="App container-fluid bg-light px-0 d-flex flex-column min-vh-100">
                <MainHeader />
                <main className="content flex-grow-1">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/search/users/id/:id" exact>
                            <UserDetail />
                        </Route>
                        <Route path="/search/:type" exact>
                            <Search />
                        </Route>
                        <Route path="/add/user" exact>
                            <AddUser />
                        </Route>
                        <Route path="/user/profile" exact>
                            <UserProfile />
                        </Route>
                        <Route path="/user/configuration" exact>
                            <UserConfiguration />
                        </Route>
                        <Route path="/add/record" exact>
                            <AddRecord />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
