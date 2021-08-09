import { applyMiddleware, createStore } from 'redux';
import thunkMidlleware from 'redux-thunk';

import searchFormReducer from './reducers/searchForm-reducer';

const store = createStore(searchFormReducer, applyMiddleware(thunkMidlleware));

export default store;
