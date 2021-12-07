import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import ResultsList from './ResultsList/ResultsList';
import Pending from './Pending/Pending';
import ErrorFetchingData from './ErrorFetchingData/ErrorFetchingData';
import AlertDismissible from '../../components/shared/Modal/AlertDismissible';
import { useLocation, useHistory } from 'react-router-dom';
import SortGroup from './SortGroup';
import sortList from '../../utils/sortList';

const Search = () => {
    const location = useLocation();
    const history = useHistory();

    const [data, setData] = useState();
    const [query, setQuery] = useState('');

    const { isPending, error, sendRequest: fetchUsers } = useFetch();

    useEffect(() => {
        const applyData = (data) => {
            setData(data);
        };

        fetchUsers('http://localhost:5000/api/users', null, applyData);
        // return () => abortCont.abort();
    }, [fetchUsers]);

    const queryChangeHandler = (inputQuery) => {
        setQuery(inputQuery.toLowerCase());
    };

    const [filteredUsers, setFilteredUsers] = useState([]);

    const queryParams = new URLSearchParams(location.search);

    const order = queryParams.get('sort') || 'newest';

    useEffect(() => {
        const updateFilteredUsers = () => {
            if (query === '') {
                return setFilteredUsers([]);
            }

            const newFilteredUsers = data.filter((user) => {
                const checkedFields = [
                    user.firstName.toLowerCase(),
                    user.lastName.toLowerCase(),
                    // user.location.city.toLowerCase(),
                ].map((field) => field.includes(query));

                const foundUsers = checkedFields.some((field) => field);

                return foundUsers;
            });
            const newFilteredAndOrderdUsers = sortList(newFilteredUsers, order);

            setFilteredUsers(newFilteredAndOrderdUsers);
        };

        const identifier = setTimeout(() => {
            updateFilteredUsers();
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [query, data, order]);

    const changeSortingHandler = (e) => {
        history.push(`${location.pathname}?sort=${e.target.id}`);
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
        // console.log(data);
        content = (
            <div className="row justify-content-center">
                <SortGroup onClick={changeSortingHandler} />
                <ResultsList filteredUsers={filteredUsers} query={query} />
            </div>
        );
    }

    if (error) {
        content = <ErrorFetchingData error={error} />;
    }

    return (
        <div className="container search-container">
            {userDeletedAlert}
            <SearchBar query={query} onQueryChange={queryChangeHandler} />
            <div className="results-container">{content}</div>
        </div>
    );
};

export default Search;
