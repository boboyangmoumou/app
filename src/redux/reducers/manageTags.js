import {actionTypes} from '../actions/manageTags';

const initialState = ['首页'];
export function ManagerTagsreducer(state=initialState,action) {
    switch (action.type) {
        case actionTypes.DELETE_TAG:
            return [ ...action.data]
        case actionTypes.ADD_TAG:
            return [...action.data]
        case actionTypes.GET_ALL_TAGS:
            return ['首页', ...action.data]
        default:
            return state;
    }
}