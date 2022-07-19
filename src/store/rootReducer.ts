import { combineReducers } from 'redux';

import { categoriesApi } from './features/categories/api';
import { productsApi } from './features/products/api';

const rootReducer = combineReducers({
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
});

export default rootReducer;
