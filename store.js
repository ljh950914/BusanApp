
import { createStore,combineReducers } from 'redux';

import { testReducer } from './reducer';


const appReducers = combineReducers({
    testReducer,
});

export default function initStore() {
    const store = createStore(
        appReducers

    );
    return store;
}