import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import resultsReducer from './resultsReducer';

const reducers = combineReducers({
    counter: counterReducer,
    results: resultsReducer,
});

export default reducers;