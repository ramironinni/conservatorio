import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../utils/useFetch';
import { useEffect, useState } from 'react';
import { dummyDB } from '../../utils/dummy-db';
import ResultsList from './ResultsList/ResultsList';
import Pending from './Pending/Pending';
import ErrorFetchingData from './ErrorFetchingData/ErrorFetchingData';

const Search = () => {
    // const [loadedUsers, setLoadedUsers] = useState();

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await fetch('http://localhost:5000/users');

    //         const responseData = await response.json();

    //         setLoadedUsers(responseData);
    //     };

    //     fetchUsers().then(console.log(loadedUsers));
    // }, []);

    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?page=1&results=6&seed=abc',
        6,
        1
    );

    const [query, setQuery] = useState('');

    const queryChangeHandler = (query) => {
        setQuery(query.toLowerCase());
    };

    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const updateFilteredUsers = () => {
            if (query === '') {
                return setFilteredUsers([]);
            }

            const newFilteredUsers = dummyDB.results.filter((user) => {
                const checkedFields = [
                    user.name.first.toLowerCase(),
                    user.name.last.toLowerCase(),
                    user.location.city.toLowerCase(),
                ].map((field) => field.includes(query));

                const foundUser = checkedFields.some((field) => field);

                return foundUser;
            });

            setFilteredUsers(newFilteredUsers);
        };

        updateFilteredUsers();
    }, [query]);

    return (
        <div className="container search-container">
            <SearchBar query={query} onQueryChange={queryChangeHandler} />
            <div className="results-container">
                {isPending && <Pending />}
                {error && <ErrorFetchingData />}
                {/* {data && ( */}
                <ResultsList filteredUsers={filteredUsers} query={query} />
                {/* )} */}
            </div>
        </div>
    );
};

export default Search;
