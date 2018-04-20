import {actionTypes} from '../actions/NewArticle';
const initialState={
    title:'',
    content:'',
    tags:[],
    id:''
};

export function AddArticleReducer(state=initialState,action) {
    switch (action.type) {
        case actionTypes.UPDATINGS_TITLE:
            return {
                ...state,title:action.title
            };
        case actionTypes.UPDATING_CONTENT:
            return {
                ...state,content:action.content
            };
        case actionTypes.UPDATING_TAGS:
            return {
                ...state,tags:action.tags
            };
        case actionTypes.SET_ARTICLE_ID:
            return {
                ...state,id:action.id
            };
        default:
            return state;
    }
}