/**
 * index.js
 * @author wangbo
 * @since 2021/3/10
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './app';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.querySelector('#root')
);
