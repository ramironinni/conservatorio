import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AddPerson from './components/AddPerson/AddPerson';

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
                        <Route path="/search">
                            <SearchBar type="Student" />
                        </Route>
                        <Route path="/add">
                            <AddPerson />
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
