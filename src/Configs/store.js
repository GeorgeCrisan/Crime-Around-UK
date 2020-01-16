import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

//create context, define provider an consumer
//const AppContext = React.createContext({});
//
//export const Provider = AppContext.Provider;
//export const Consumer = AppContext.Consumer;
//
//export default AppContext;

export default function appStore (initialState={}) {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    )
}