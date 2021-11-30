import './Login.css';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import getCurrentYear from '../../utils/getCurrentYear';
import useForm from '../../hooks/useForm';
import { formConfig } from '../../utils/forms/login/formConfig';

const Login = () => {
    const authCtx = useContext(AuthContext);

    const { renderFormFields, isFormValid } = useForm(formConfig);

    const submitHandler = (e) => {
        e.preventDefault();

        if (isFormValid) {
            authCtx.onLogin(e.target.email.value, e.target.password.value);
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

                    {renderFormFields()}

                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" />{' '}
                            Remember me
                        </label>
                    </div> */}
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
