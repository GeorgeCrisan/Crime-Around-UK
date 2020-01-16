import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/theme.scss';
import store from "./Configs/store";
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store()}>
    <App />
</Provider>, document.getElementById('root'));


