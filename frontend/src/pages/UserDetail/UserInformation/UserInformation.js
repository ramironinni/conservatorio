import UserDetailField from '../UserDetailField';
const { DateTime } = require('luxon');

const UserInformation = ({ user }) => {
    const userToDisplay = {
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: DateTime.fromISO(user.createdAt)
            .setLocale('es-ar')
            .toFormat('ff'),
        updatedAt: DateTime.fromISO(user.updatedAt)
            .setLocale('es-ar')
            .toFormat('ff'),
    };

    return (
        <div>
            {Object.entries(userToDisplay).map((field, i) => {
                return (
                    <UserDetailField
                        fieldName={field[0]}
                        fieldValue={field[1]}
                        key={i}
                    />
                );
            })}
        </div>
    );
};

export default UserInformation;
