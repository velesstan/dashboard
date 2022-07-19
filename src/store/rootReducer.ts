import { combineReducers } from 'redux';

import { categoriesApi } from './features/categories/api';
import { holdersApi } from './features/holders/api';
import { productsApi } from './features/products/api';
import { usersApi } from './features/users/api';

const rootReducer = combineReducers({
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [holdersApi.reducerPath]: holdersApi.reducer,
});

export default rootReducer;
