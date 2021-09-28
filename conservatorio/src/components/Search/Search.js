import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../utils/useFetch';
import UserCard from './UserCard/UserCard';
import { useEffect, useState } from 'react';
import { dummyDB } from '../../utils/dummy-db';
import NoResults from './NoResults/NoResults';

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
                {isPending && (
                    <div className="results-pending">Loading ...</div>
                )}
                {error && (
                    <div className="results-pending">Cannot fetch the data</div>
                )}

                {/* {data && ( */}
                <div className="row results-list">
                    {filteredUsers && !isNotFound ? (
                        filteredUsers.map((user, i) => {
                            return (
                                <UserCard
                                    name={user.name.first}
                                    last={user.name.last}
                                    img={user.picture.thumbnail}
                                    key={i}
                                />
                            );
                        })
                    ) : (
                        <NoResults />
                    )}
                </div>
                {/* )} */}
            </div>
        </div>
    );
};

export default Search;
