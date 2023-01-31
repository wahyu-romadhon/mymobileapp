import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';
import {apiTest} from './api';

function* getAllUserInfo(action) {
  console.log('action', action);
  const data = yield call(apiTest, action.payload);
  try {
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {}
}

function* handler(params) {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

export {handler};
