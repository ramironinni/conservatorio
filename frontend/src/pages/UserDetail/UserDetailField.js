import camelCasedToText from '../../utils/camelCasedToText';

const UserDetailField = ({ fieldName, fieldValue }) => {
    return (
        <div className="row mb-4 mb-md-0">
            <div className="col-md-2 bg-secondary text-light">
                {fieldName && camelCasedToText(fieldName)}
            </div>
            <div className="col-md-9 border">{fieldValue}</div>
        </div>
    );
};

export default UserDetailField;
