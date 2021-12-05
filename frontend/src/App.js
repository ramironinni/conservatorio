import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Search from './pages/Search/Search';
import UserDetail from './pages/UserDetail/UserDetail';
import Footer from './components/Footer/Footer';
import AddRecord from './pages/Add/AddRecord/AddRecord';
import AddUser from './pages/Add/AddUser/AddUser';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './pages/Login/Login';
import UserProfile from './pages/User/UserProfile';
import UserConfiguration from './pages/User/UserConfiguration';
import { useSelector } from 'react-redux';

function App() {
    // const authCtx = useContext(AuthContext);
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

    if (!isLoggedIn) {
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
                        <Route path="/add/record" exact>
                            <AddRecord />
                        </Route>
                        <Route path="/user/profile" exact>
                            <UserProfile />
                        </Route>
                        <Route path="/user/configuration" exact>
                            <UserConfiguration />
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
