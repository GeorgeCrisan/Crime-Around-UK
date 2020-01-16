import * as EVENTS from '../events';

const requestData1 = () => ({
    type: EVENTS.TEST_START,
});

const receivedData1 = data => ({
    type: EVENTS.TEST_SUCCESS,
    payload: data 
});

const errorData1 = err => ({
    type: EVENTS.TEST_FAIL,
    errorStatus: err 
});


export function fetchData1(url, params) {
    return function (dispatch) {
        dispatch(requestData1());
        return fetch(url).then(
            res => res.json(),
            error => {
                console.log('An error occurred', error);
                dispatch(errorData1(error));
            }
        ).then(data => {
            dispatch(receivedData1(data));
        }).catch((err)=>{
            dispatch(errorData1(err));
        });
    }
}