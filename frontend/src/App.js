import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

// import Login from './pages/Login/Login';
// import NotFound from './components/NotFound/NotFound';
// import Search from './pages/Search/Search';
// import UserDetail from './pages/UserDetail/UserDetail';
// import AddRecord from './pages/Add/AddRecord/AddRecord';
// import AddUser from './pages/Add/AddUser/AddUser';
// import UserProfile from './pages/User/UserProfile';
// import UserConfiguration from './pages/User/UserConfiguration';

// import MainHeader from './components/MainHeader/MainHeader';
// import Footer from './components/Footer/Footer';
// import Home from './pages/Home/Home';

import { useSelector } from 'react-redux';
import Pending from './components/shared/Pending/Pending';

const Login = React.lazy(() => import('./pages/Login/Login'));
const MainHeader = React.lazy(() =>
    import('./components/MainHeader/MainHeader')
);
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));
const Search = React.lazy(() => import('./pages/Search/Search'));
const UserDetail = React.lazy(() => import('./pages/UserDetail/UserDetail'));
const AddRecord = React.lazy(() => import('./pages/Add/AddRecord/AddRecord'));
const AddUser = React.lazy(() => import('./pages/Add/AddUser/AddUser'));
const UserProfile = React.lazy(() => import('./pages/User/UserProfile'));
const UserConfiguration = React.lazy(() =>
    import('./pages/User/UserConfiguration')
);

function App() {
    // const authCtx = useContext(AuthContext);
    const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

    if (!isLoggedIn) {
        return (
            <Suspense fallback={<Pending />}>
                <Login />
            </Suspense>
        );
    }

    return (
        <Router>
            <Suspense fallback={<Pending />}>
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
                            {/* <Route path="/search/:type" exact> */}
                            <Route path="/search" exact>
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
            </Suspense>
        </Router>
    );
}

export default App;
