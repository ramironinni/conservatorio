import './Login.css';
import logo from '../../assets/logo.png';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';
import Input from '../Forms/Input';
import getCurrentYear from '../../utils/getCurrentYear';

const ACTIONS = {
    EMAIL_INPUT: 'EMAIL_INPUT',
    EMAIL_BLUR: 'EMAIL_BLUR',
    PASSWORD_INPUT: 'PASSWORD_INPUT',
    PASSWORD_BLUR: 'PASSWORD_BLUR',
};

const defaultEmail = { value: '', isValid: false };

const emailReducer = (state, action) => {
    if (action.type === ACTIONS.EMAIL_INPUT) {
        return {
            value: action.value,
            isValid: validateEmail(action.value),
        };
    }
    if (action.type === ACTIONS.EMAIL_BLUR) {
        return { value: state.value, isValid: validateEmail(state.value) };
    }
    return defaultEmail;
};

const validateEmail = (value) => {
    if (value.includes('@')) {
        return true;
    }

    return false;
};

const defaultPassword = { value: '', isValid: false };

const passwordReducer = (state, action) => {
    if (action.type === ACTIONS.PASSWORD_INPUT) {
        return {
            value: action.value,
            isValid: validatePassword(action.value),
        };
    }
    if (action.type === ACTIONS.PASSWORD_BLUR) {
        return {
            value: state.value,
            isValid: validatePassword(state.value),
        };
    }
    return defaultPassword;
};

const validatePassword = (value) => {
    if (value.length > 5) {
        return true;
    }

    return false;
};

const Login = () => {
    const authCtx = useContext(AuthContext);

    const [emailState, dispatchEmail] = useReducer(emailReducer, defaultEmail);

    const [passwordState, dispatchPassword] = useReducer(
        passwordReducer,
        defaultPassword
    );

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: ACTIONS.EMAIL_INPUT, value: e.target.value });
    };

    const passwordChangeHandler = (e) => {
        dispatchPassword({
            type: ACTIONS.PASSWORD_INPUT,
            value: e.target.value,
        });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: ACTIONS.EMAIL_BLUR });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: ACTIONS.PASSWORD_BLUR });
    };

    const [formIsValid, setFormIsValid] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

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

        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailState.isValid) {
            emailInputRef.current.focus();
            console.log('invalid email');
        } else {
            passwordInputRef.current.focus();
            console.log('invalid password');
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
                    <div className="form-floating">
                        <Input
                            ref={emailInputRef}
                            type="email"
                            id="emailInput"
                            isValid={emailState.isValid}
                            placeholder="name@example.com"
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler}
                            value={emailState.value}
                        />
                        <label htmlFor="emailInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <Input
                            ref={passwordInputRef}
                            type="password"
                            id="passwordInput"
                            isValid={passwordState.isValid}
                            placeholder="Password"
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler}
                            value={passwordState.value}
                        />
                        <label htmlFor="passwordInput">Password</label>
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
                        &copy; {getCurrentYear()}
                    </p>
                </form>
            </main>
        </div>
    );
};

export default Login;
