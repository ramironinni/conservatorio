import NoResults from '../NoResults/NoResults';
import UserCard from '../UserCard/UserCard';

const ResultsList = ({ filteredUsers, isNotFound }) => {
    const results =
        filteredUsers && !isNotFound ? (
            filteredUsers.map((user, i) => {
                return (
                    <UserCard
                        name={user.name.first}
                        last={user.name.last}
                        img={user.picture.thumbnail}
                        user={user}
                        key={i}
                    />
                );
            })
        ) : (
            <NoResults />
        );

    return <div className="row results-list">{results}</div>;
};

export default ResultsList;
