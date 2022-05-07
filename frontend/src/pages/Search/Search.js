import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import ResultsList from './ResultsList/ResultsList';
import ErrorFetchingData from '../../components/shared/ErrorFetchingData/ErrorFetchingData';
import AlertDismissible from '../../components/shared/Modal/AlertDismissible';
import { useLocation } from 'react-router-dom';
import SortGroup from './SortGroup';
import Pending from '../../components/shared/Pending/Pending';

const Search = () => {
    const location = useLocation();

    const [initialRender, setInitialRender] = useState(true);
    const [data, setData] = useState();
    const [query, setQuery] = useState('');
    const [userInput, setUserInput] = useState('');
    const [resultsOrder, setResultsOrder] = useState('asc');

    const { isPending, error, sendRequest: fetchUsers } = useFetch();

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
            return;
        }

        if (query === '') {
            setData(null);
            return;
        }

        const applyData = (data) => {
            setData(data);
        };

        fetchUsers(
            `http://localhost:5000/api/users/search/${query}`,
            null,
            applyData
        );

        // return () => abortCont.abort();
    }, [fetchUsers, query, initialRender]);

    const queryChangeHandler = (userInput) => {
        setUserInput(userInput.toLowerCase());
    };

    const sortingClickHandler = (e) => {
        setResultsOrder(e.target.id);
    };

    const formSubmitHandler = (userInput) => {
        setQuery(userInput);
    };

    let userDeletedAlert = '';

    if (location.state && location.state.deleted === true) {
        userDeletedAlert = (
            <AlertDismissible
                type="success"
                text="User successfully deleted!"
            />
        );
    }

    let content = '';

    if (isPending) {
        content = <Pending />;
    }

    if (error) {
        content = <ErrorFetchingData error={error} />;
    }

    if (data) {
        content = (
            <div className="row justify-content-center">
                <SortGroup onClick={sortingClickHandler} />
                <ResultsList
                    filteredUsers={data.data.users}
                    resultsOrder={resultsOrder}
                    query={query}
                />
            </div>
        );
    }

    return (
        <div className="container search-container">
            {userDeletedAlert}
            <SearchBar
                userInput={userInput}
                onQueryChange={queryChangeHandler}
                onSubmitHandler={formSubmitHandler}
            />
            <div className="results-container">{content}</div>
        </div>
    );
};

export default Search;
