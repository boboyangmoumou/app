import {actionTypes} from '../actions/article';
const initialState = {
    // category: [],
    articleList: [],
    articleDetail: {},
    isFetching:false
    // pageNum: 1,
    // total: 0
};
export function ArticleReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_ARTICLE_LIST:
            return {
                ...state, articleList: [...action.data.data.list]
            };
        default:
            return state;
    }
}
export function ArticleDetailReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_START:
            return {
                isFetching: true
            }
        case actionTypes.GET_ARTICLE_DETAIL:
        return {
            ...state, articleDetail: action.Detaildata
        };
        default:
        return state;
    }
}