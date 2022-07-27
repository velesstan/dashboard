import { SmileOutlined } from '@ant-design/icons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { TNotification } from './interfaces';

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {} as TNotification,
    reducers: {
        showNotification(_, action: PayloadAction<TNotification>) {
            notification.open({
                message: action.payload.message,
                description: action.payload.description,
                icon: <SmileOutlined />,
            });
        },
    },
});

const { actions } = notificationsSlice;

export const { showNotification } = actions;
