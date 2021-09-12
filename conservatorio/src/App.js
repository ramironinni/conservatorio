import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import UserDetail from './components/UserDetail/UserDetail';
import Footer from './components/Footer/Footer';
import AddRecord from './components/Add/AddRecord/AddRecord';
import AddUser from './components/Add/AddUser/AddUser';

function App() {
    return (
        <Router>
            <div className="bg-light px-0 App">
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
                        <Route path="/add/user">
                            <AddUser />
                        </Route>
                        <Route path="/add/record">
                            <AddRecord />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
