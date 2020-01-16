
import React from 'react';
import ReactDOM from 'react-dom';


//app component
import App from './App';

//style
import './Styles/theme.scss';

//state management
import store from "./Configs/store";
import {Provider} from 'react-redux';


console.log(process.env.REACT_APP_DB_USER);

ReactDOM.render(<Provider store={store()}>
    <App />
</Provider>, document.getElementById('root'));


