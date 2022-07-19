import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { categoriesApi } from './features/categories/api';
import { productsApi } from './features/products/api';
import { usersApi } from './features/users/api';
import rootReducer from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(
            categoriesApi.middleware,
            productsApi.middleware,
            usersApi.middleware
        );
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
