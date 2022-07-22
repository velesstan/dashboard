import { combineReducers } from 'redux';

import {
    usersApi,
    categoriesApi,
    productsApi,
    holdersApi,
    waybillsApi,
    balancesApi,
} from './features';
import { rolesApi } from './features/roles';

const rootReducer = combineReducers({
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [holdersApi.reducerPath]: holdersApi.reducer,
    [waybillsApi.reducerPath]: waybillsApi.reducer,
    [balancesApi.reducerPath]: balancesApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
});

export default rootReducer;
