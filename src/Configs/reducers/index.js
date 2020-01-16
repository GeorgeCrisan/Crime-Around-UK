import { combineReducers } from 'redux';

import appstate from './appstate';
import datafetch from './datafetch';

export default combineReducers({
    appstate,
    datafetch
});