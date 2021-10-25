import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import UserDetail from './components/UserDetail/UserDetail';
import Footer from './components/Footer/Footer';
import AddRecord from './components/Add/AddRecord/AddRecord';
import AddUser from './components/Add/AddUser/AddUser';
import { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import AuthContext from './store/auth-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoginStoraged = localStorage.getItem('isLoggedIn');

        if (isLoginStoraged === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
        return <Login onLogin={loginHandler} />;
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            <Router>
                <div className="App container-fluid bg-light px-0 d-flex flex-column min-vh-100">
                    <NavBar onLogout={logoutHandler} />
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
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
