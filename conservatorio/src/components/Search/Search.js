import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../utils/useFetch';
import UserCard from './UserCard/UserCard';

const Search = () => {
    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?page=1&results=4&seed=abc',
        4,
        1
    );

    return (
        <div className="container search-container">
            <SearchBar />
            <div className="results-container">
                {isPending && (
                    <div className="results-pending">Loading ...</div>
                )}
                {error && (
                    <div className="results-pending">Cannot fetch the data</div>
                )}
                {data && (
                    <div className="row results-list">
                        {console.log(data.results)}
                        {data.results.map((user, i) => {
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
                )}
            </div>
        </div>
    );
};

export default Search;
