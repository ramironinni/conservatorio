import './Login.css';
import logo from '../../assets/logo.png';
import { useEffect, useReducer, useState } from 'react';

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
        PASSWORD_INPUT: 'PASSWORD_INPUT',
        PASSWORD_VALIDATION: 'PASSWORD_VALIDATION',
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
        return { value: '', isValid: false };
    };

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
    });

    const validatePassword = (value) => {
        if (value.length > 5) {
            return true;
        }

        return false;
    };

    const passwordReducer = (state, action) => {
        if (action.type === ACTIONS.PASSWORD_INPUT) {
            return {
                value: action.value,
                isValid: validatePassword(action.value),
            };
        }
        if (action.type === ACTIONS.PASSWORD_VALIDATION) {
            return {
                value: state.value,
                isValid: validatePassword(state.value),
            };
        }
        return { value: '', isValid: false };
    };

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
    });

    const currentYear = () => {
        return new Date().getFullYear();
    };

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: ACTIONS.EMAIL_INPUT, value: e.target.value });
    };

    const passwordChangeHandler = (e) => {
        dispatchPassword({
            type: ACTIONS.PASSWORD_INPUT,
            value: e.target.value,
        });
    };

    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity!');
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        };
    }, [emailState.isValid, passwordState.isValid]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatchEmail({ type: ACTIONS.EMAIL_VALIDATION });
        dispatchPassword({ type: ACTIONS.PASSWORD_VALIDATION });
        console.log(emailState.isValid);
        console.log(passwordState.isValid);
        if (emailState.isValid && passwordState.isValid) {
            onLogin(emailState.value, passwordState.value);
        } else {
            console.log('invalid email or password');
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
                            onChange={passwordChangeHandler}
                            value={passwordState.value}
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
                        disabled={!formIsValid}
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
