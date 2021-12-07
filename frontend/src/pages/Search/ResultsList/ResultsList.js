import NoResults from '../NoResults/NoResults';
import UserCard from '../UserCard/UserCard';

const ResultsList = ({ filteredUsers, query }) => {
    let results;

    if (query !== '' && filteredUsers.length === 0) results = <NoResults />;

    if (filteredUsers.length > 0) {
        results = filteredUsers.map((user, i) => {
            return (
                <UserCard
                    name={user.firstName}
                    last={user.lastName}
                    created={user.createdAt}
                    // img={user.picture.thumbnail}
                    user={user}
                    key={i}
                />
            );
        });
    }

    return <div className="row results-list">{results}</div>;
};

export default ResultsList;
