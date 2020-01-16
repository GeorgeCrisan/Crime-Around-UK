import * as EVENTS from '../events';

export const toggleTheme = data => ({
    type: EVENTS.TOGGLE_THEME,
    payload: data 
});
