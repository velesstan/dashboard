import { combineReducers } from 'redux';

import {
    usersApi,
    categoriesApi,
    productsApi,
    holdersApi,
    waybillsApi,
    balancesApi,
} from './features';

const rootReducer = combineReducers({
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [holdersApi.reducerPath]: holdersApi.reducer,
    [waybillsApi.reducerPath]: waybillsApi.reducer,
    [balancesApi.reducerPath]: balancesApi.reducer,
});

export default rootReducer;
