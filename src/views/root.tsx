import React from 'react';
import MainTemplate from 'templates/mainTemplate';
import UserPageTemplate from './userPageTemplate';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const Root: React.FC = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MainTemplate>
                <UserPageTemplate />
            </MainTemplate>
        </PersistGate>
    </Provider>
);

export default Root;
