import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../utils/useFetch';
import { useEffect, useState } from 'react';
import { dummyDB } from '../../utils/dummy-db';
import ResultsList from './ResultsList/ResultsList';
import Pending from './Pending/Pending';
import ErrorFetchingData from './ErrorFetchingData/ErrorFetchingData';

const Search = () => {
    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?page=1&results=6&seed=abc',
        6,
        1
    );

    const [query, setQuery] = useState('');
    const [isNotFound, setIsNotFound] = useState(false);

    const queryChangeHandler = (query) => {
        setQuery(query.toLowerCase());
    };

    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const updateFilteredUsers = () => {
            const newFilteredUsers = dummyDB.results.filter((user) => {
                const firstNameFound = user.name.first
                    .toLowerCase()
                    .includes(query);
                const lastNameFound = user.name.last
                    .toLowerCase()
                    .includes(query);
                const cityFound = user.location.city
                    .toLowerCase()
                    .includes(query);
                return firstNameFound || lastNameFound || cityFound;
            });

            setFilteredUsers(newFilteredUsers);

            setIsNotFound(newFilteredUsers.length === 0 ? true : false);
        };

        if (query === '') {
            setFilteredUsers([]);
        } else {
            updateFilteredUsers();
        }
    }, [query]);

    return (
        <div className="container search-container">
            <SearchBar query={query} onQueryChange={queryChangeHandler} />
            <div className="results-container">
                {isPending && <Pending />}
                {error && <ErrorFetchingData />}
                {/* {data && ( */}
                <ResultsList
                    filteredUsers={filteredUsers}
                    isNotFound={isNotFound}
                />
                {/* )} */}
            </div>
        </div>
    );
};

export default Search;
