import { actionsTypes } from '../actions/user.js';
const initialState = {
  isFetching: true,
  msg: {
    type: 1, //0失败 1成功
    content: ''
  },
  userInfo: {}
};

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_START:
      return {
        ...state, isFetching: true
      }
    case actionsTypes.FETCH_END:
      return {
        ...state, isFetching: false
      }
    case actionsTypes.SET_MESSAGE:
      return {
        ...state,
        isFetching: false,
        msg: {
          type: action.status,
          content: action.msg
        }
      }
    case actionsTypes.RESPONSE_USER_INFO:
      return {
        ...state, userInfo: action.data
      }
    default:
      return state
  }
}
