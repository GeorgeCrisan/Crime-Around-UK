import * as EVENTS from '../events';

const AppState = (state, action) => {
    switch (action.type) {
        case EVENTS.TOGGLE_THEME: 
            return {...state};
        
        default:
            return {...state, theme: 'dark'};
    }
}

export default AppState;