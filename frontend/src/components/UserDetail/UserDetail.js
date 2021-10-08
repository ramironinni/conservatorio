import { useLocation } from 'react-router-dom';

const UserDetail = () => {
    const location = useLocation();
    console.log(location.state.user);
    const user = location.state.user;

    const clickHandler = () => {
        const deleteUser = async () => {
            //show modal first
            const response = await fetch(
                `http://localhost:5000/api/users/delete/${user._id}`,
                {
                    method: 'DELETE',
                }
            );
            const result = await response.json();
            console.log(result);
        };

        deleteUser();
    };

    return (
        <div className="container-sm px-5-sm user-detail-container">
            <img
                src="https://via.placeholder.com/150"
                class="rounded mx-auto d-block my-4"
                alt="..."
            />
            <div class="container">
                <div class="row">
                    <div class="col-md-2 bg-secondary">First name</div>
                    <div class="col-md-9 border">{user.firstName}</div>
                    <div class="col-md-2 bg-secondary">Last name</div>
                    <div class="col-md-9 border">{user.lastName}</div>
                    <div class="w-100 my-3"></div>
                    <div class="col-md-2 bg-secondary">First name</div>
                    <div class="col-md-9 border">{user.firstName}</div>
                    <div class="col-md-2 bg-secondary">Last name</div>
                    <div class="col-md-9 border">{user.lastName}</div>
                    <div class="w-100 my-3"></div>
                    <div class="col-md-12 text-center">
                        <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic mixed styles example"
                        >
                            <button
                                type="button"
                                class="btn btn-warning"
                                onClick={clickHandler}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={clickHandler}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
