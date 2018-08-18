import { get } from '../../fetch/fetch.js';
import { actionsTypes as IndexActionTypes } from './user';
export const actionTypes = {
  ADMIN_GET_ARTICLE_LIST: 'ADMIN_GET_ARTICLE_LIST',
  ADMIN_RESPONSE_GET_ARTICLE_LIST: 'ADMIN_RESPONSE_GET_ARTICLE_LIST',
  ADMIN_EDIT_ARTICLE: 'ADMIN_EDIT_ARTICLE',
  ADMIN_DELETE_ARTICLE: 'ADMIN_DELETE_ARTICLE'
};
export const actions = {
  get_article_list: function (data) {
    return {
      type: actionTypes.ADMIN_GET_ARTICLE_LIST,
      data
    }
  },
  delete_article: function (id) {
    return {
      type: actionTypes.ADMIN_DELETE_ARTICLE,
      id
    }
  },
  edit_article: function (id) {
    return {
      type: actionTypes.ADMIN_EDIT_ARTICLE
    }
  }
}
export const fetchmanager = () => async (dispatch) => {
  try {
    dispatch({ type: IndexActionTypes.FETCH_START })
    let { data } = await get(`/index/getArticles`)
    console.log(data);
    await dispatch(actionTypes.get_article_list(data))
    dispatch({ type: IndexActionTypes.FETCH_END })
  } catch (error) {
    dispatch({ type: IndexActionTypes.SET_MESSAGE })
  }
}