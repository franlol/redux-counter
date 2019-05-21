import { createStore } from 'redux';
import reducers from './reducers/index'; // 'index' should be omited, like in html paths

const store = createStore(reducers);

export default store;