import './Login.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const currentYear = () => {
        return new Date().getFullYear();
    };

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const emailPasswordHandler = (e) => {
        setEnteredPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        onLogin(enteredEmail, enteredPassword);
    };

    return (
        <div className="form-singin-container">
            <main className="form-signin text-center">
                <form onSubmit={submitHandler}>
                    <img
                        className="mb-4 rounded"
                        src={logo}
                        alt=""
                        width="57"
                        height="57"
                    />
                    {/* <h1 className="h4 mb-3 fw-normal">Log in</h1> */}

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={emailChangeHandler}
                            value={enteredEmail}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={emailPasswordHandler}
                            value={enteredPassword}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />{' '}
                            Remember me
                        </label>
                    </div>
                    <button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"
                    >
                        Log in
                    </button>
                    <p className="mt-5 mb-3 text-muted">
                        &copy; {currentYear()}
                    </p>
                </form>
            </main>
        </div>
    );
};

export default Login;
