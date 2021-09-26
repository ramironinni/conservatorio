import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../utils/useFetch';
import UserCard from './UserCard/UserCard';
import { useEffect, useState } from 'react';
import { dummyDB } from '../../utils/dummy-db';

const Search = () => {
    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?page=1&results=6&seed=abc',
        6,
        1
    );

    const [query, setQuery] = useState('');
    const queryChangeHandler = (query) => {
        setQuery(query);
    };

    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const updateFilteredUsers = () => {
            const newFilteredUsers = dummyDB.results.filter((user) => {
                const firstNameFound = user.name.first.includes(query);
                const lastNameFound = user.name.last.includes(query);
                const cityFound = user.location.city.includes(query);
                return firstNameFound || lastNameFound || cityFound;
            });

            setFilteredUsers(newFilteredUsers);
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
                {isPending && (
                    <div className="results-pending">Loading ...</div>
                )}
                {error && (
                    <div className="results-pending">Cannot fetch the data</div>
                )}

                {/* {data && ( */}
                <div className="row results-list">
                    {filteredUsers &&
                        filteredUsers.map((user, i) => {
                            return (
                                <UserCard
                                    name={user.name.first}
                                    last={user.name.last}
                                    img={user.picture.thumbnail}
                                    key={i}
                                />
                            );
                        })}
                </div>
                {/* )} */}
            </div>
        </div>
    );
};

export default Search;
