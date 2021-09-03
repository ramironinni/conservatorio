import SearchBar from './SearchBar/SearchBar';
import useFetch from '../../utils/useFetch';
import UserCard from './UserCard/UserCard';

const Search = () => {
    const { data, isPending, error } = useFetch(
        'https://randomuser.me/api/?page=1&results=5&seed=abc',
        5,
        1
    );

    return (
        <div className="container my-5 search-container">
            <SearchBar />
            <div className="results-container">
                {isPending && (
                    <div className="results-pending">Loading ...</div>
                )}
                {error && (
                    <div className="results-pending">Cannot fetch the data</div>
                )}
                {data && (
                    <div className="results-list">
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
