import * as EVENTS from '../events';

const DataFetch = (state, action) => {
    switch (action.type) {
        case EVENTS.TEST_START: 
            return {...state, loading: true, error: false};
        

        case EVENTS.TEST_SUCCESS: 
            return {...state, loading: false, error: false };
        

        case EVENTS.TEST_FAIL: 
            return {...state, loading: false, error: true };
        
        
        default:
            return {...state, loading: false, error: false };
    }
}

export default DataFetch;