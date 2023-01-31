import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import {reducer} from './app/models/root-reducer';
import {handler as userSaga} from './app/models/user/saga';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(userSaga);

export {store};
