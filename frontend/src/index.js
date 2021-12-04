import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import './index.css';
import App from './App';
// import { AuthContextProvider } from './store/auth-context';

import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <React.StrictMode>
        {/* <AuthContextProvider> */}
        <Provider store={store}>
            <App />
        </Provider>
        {/* </AuthContextProvider> */}
    </React.StrictMode>,
    document.getElementById('root')
);
