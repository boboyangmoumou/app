import { FETCH_STARTED, FETCH_CHECK, FETCH_FAILURE } from '../actions/index';
import * as Status from '../status.js'
export function checkUser (state = { status: Status.LOADING }, action) {
  switch (action.type) {
    case FETCH_STARTED: {
      return { status: Status.LOADING };
    }
    case FETCH_CHECK: {
      return { ...state, status: Status.SUCCESS, ...action.checkUser };
    }
    case FETCH_FAILURE: {
      return { status: Status.FAILURE };
    }
    default: {
      return state;
    }
  }
}