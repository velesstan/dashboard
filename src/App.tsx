import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';

import { AppRouter } from 'components/AppRouter';
import { store } from 'store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider locale={ruRU}>
                    <AppRouter />
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
