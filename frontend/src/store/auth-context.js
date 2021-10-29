import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: true,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoginStoraged = localStorage.getItem('isLoggedIn');

        if (isLoginStoraged === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHanlder = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHanlder,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
