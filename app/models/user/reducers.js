import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';

const initialState = {
  id: null,
  name: null,
  email: null,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_INFO_REQUEST_SUCCESS: {
      const {data} = action.payload;
      console.log('data', data);
      return {
        data,
      };
    }
    default:
      return state;
  }
};

export {reducer};
