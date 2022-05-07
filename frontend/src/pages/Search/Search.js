import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import ResultsList from './ResultsList/ResultsList';
import ErrorFetchingData from '../../components/shared/ErrorFetchingData/ErrorFetchingData';
import AlertDismissible from '../../components/shared/Modal/AlertDismissible';
import { useLocation, useHistory } from 'react-router-dom';
import SortGroup from './SortGroup';
import sortList from '../../utils/sortList';
import Pending from '../../components/shared/Pending/Pending';

const Search = () => {
    const location = useLocation();
    const history = useHistory();

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

    // const [filteredUsers, setFilteredUsers] = useState([]);

    // const queryParams = new URLSearchParams(location.search);

    // const order = queryParams.get('sort') || 'asc';

    // useEffect(() => {
    //     const updateFilteredUsers = () => {
    //         if (query === '') {
    //             return setFilteredUsers([]);
    //         }

    //         const newFilteredUsers = data.filter((user) => {
    //             const checkedFields = [
    //                 user.firstName.toLowerCase(),
    //                 user.lastName.toLowerCase(),
    //                 // user.location.city.toLowerCase(),
    //             ].map((field) => field.includes(query));

    //             const foundUsers = checkedFields.some((field) => field);

    //             return foundUsers;
    //         });
    //         const newFilteredAndOrderdUsers = sortList(newFilteredUsers, order);

    //         setFilteredUsers(newFilteredAndOrderdUsers);
    //     };

    //     const identifier = setTimeout(() => {
    //         updateFilteredUsers();
    //     }, 500);

    //     return () => {
    //         clearTimeout(identifier);
    //     };
    // }, [query, data, order]);

    const changeSortingHandler = (e) => {
        setResultsOrder(e.target.id);
    };

    const submitSearchHandler = (userInput) => {
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

    if (data) {
        content = (
            <div className="row justify-content-center">
                <SortGroup onClick={changeSortingHandler} />
                <ResultsList
                    filteredUsers={data}
                    resultsOrder={resultsOrder}
                    query={query}
                />
            </div>
        );
    }

    if (error) {
        content = <ErrorFetchingData error={error} />;
    }

    return (
        <div className="container search-container">
            {userDeletedAlert}
            <SearchBar
                userInput={userInput}
                onQueryChange={queryChangeHandler}
                onSubmitHandler={submitSearchHandler}
            />
            <div className="results-container">{content}</div>
        </div>
    );
};

export default Search;
