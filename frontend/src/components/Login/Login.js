import './Login.css';
import logo from '../../assets/logo.png';
import { useReducer, useState } from 'react';

const Login = ({ onLogin }) => {
    const validateEmail = (value) => {
        if (value.includes('@')) {
            return true;
        }

        return false;
    };

    const ACTIONS = {
        EMAIL_INPUT: 'EMAIL_INPUT',
        EMAIL_VALIDATION: 'EMAIL_VALIDATION',
    };

    const emailReducer = (state, action) => {
        if (action.type === ACTIONS.EMAIL_INPUT) {
            return {
                value: action.value,
                isValid: validateEmail(action.value),
            };
        }
        if (action.type === ACTIONS.EMAIL_VALIDATION) {
            return { value: state.value, isValid: validateEmail(state.value) };
        }
    };

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
    });

    // const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const currentYear = () => {
        return new Date().getFullYear();
    };

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: ACTIONS.EMAIL_INPUT, value: e.target.value });
    };

    const emailPasswordHandler = (e) => {
        setEnteredPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatchEmail({ type: ACTIONS.EMAIL_VALIDATION });
        if (emailState.isValid) {
            onLogin(emailState.value, enteredPassword);
        } else {
            console.log('invalid email');
        }
    };

    return (
        <div className="form-singin-container">
            <main className="form-signin text-center">
                <form onSubmit={submitHandler} noValidate>
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
                            value={emailState.value}
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
