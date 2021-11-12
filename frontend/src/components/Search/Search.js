import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import ResultsList from './ResultsList/ResultsList';
import Pending from './Pending/Pending';
import ErrorFetchingData from './ErrorFetchingData/ErrorFetchingData';

const Search = () => {
    const [data, setData] = useState();

    const { isPending, error, sendRequest: fetchUsers } = useFetch();

    useEffect(() => {
        const applyData = (data) => {
            setData(data);
        };

        fetchUsers('http://localhost:5000/api/users', null, applyData);
        // return () => abortCont.abort();
    }, [fetchUsers]);

    // const [query, setQuery] = useState('');

    // const queryChangeHandler = (query) => {
    //     setQuery(query.toLowerCase());
    // };

    // const [filteredUsers, setFilteredUsers] = useState([]);

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

    //             const foundUser = checkedFields.some((field) => field);

    //             return foundUser;
    //         });

    //         setFilteredUsers(newFilteredUsers);
    //     };

    //     const identifier = setTimeout(() => {
    //         updateFilteredUsers();
    //     }, 500);

    //     return () => {
    //         clearTimeout(identifier);
    //     };
    // }, [query, data]);

    let content = '';

    if (isPending) {
        content = <Pending />;
    }

    if (data) {
        console.log(data);
        // content = <ResultsList filteredUsers={filteredUsers} query={query} />;
    }

    if (error) {
        content = <ErrorFetchingData error={error} />;
    }

    return (
        <div className="container search-container">
            {/* <SearchBar query={query} onQueryChange={queryChangeHandler} /> */}
            <div className="results-container">{content}</div>
        </div>
    );
};

export default Search;
