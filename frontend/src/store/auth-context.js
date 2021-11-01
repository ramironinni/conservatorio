import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: true,
    user: {},
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: null });

    useEffect(() => {
        const isLoginStoraged = localStorage.getItem('isLoggedIn');

        if (isLoginStoraged === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setUser({ email });
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
                user,
                onLogin: loginHandler,
                onLogout: logoutHanlder,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
