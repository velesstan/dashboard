import { combineReducers } from 'redux';

import { categoriesApi } from './features/categories/api';

const rootReducer = combineReducers({
    [categoriesApi.reducerPath]: categoriesApi.reducer,
});

export default rootReducer;
