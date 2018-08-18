import { post } from '../../fetch/fetch';
import { actionsTypes as IndexActionTypes } from './user';
export const actionTypes = {
  UPDATING_TITLE: "UPDATING_TITLE",
  UPDATING_CONTENT: "UPDATING_CONTENT",
  UPDATING_TAGS: "UPDATING_TAGS",
  SAVE_ARTICLE: "SAVE_ARTICLE",
  SET_ARTICLE_ID: "SET_ARTICLE_ID"
}

export const actions = {
  update_title: function (title) {
    return {
      type: actionTypes.UPDATING_TITLE,
      title
    }
  },
  update_content: function (content) {
    return {
      type: actionTypes.UPDATING_CONTENT,
      content
    }
  },
  update_tags: function (tags) {
    return {
      type: actionTypes.UPDATING_TAGS,
      tags
    }
  },
  save_article: function (data) {
    return {
      type: actionTypes.SAVE_ARTICLE,
      data
    }
  }
};

export const FetchNewArticle = (title, content, tags) => async (dispatch) => {
  try {
    dispatch({ type: IndexActionTypes.FETCH_START })
    if (title === '') {
      dispatch({ type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章标题', msgType: 0 })
      return;
    }
    if (title && content && tags.length > 0) {
      let newData = await post('/article/addArticle', { title, content, tags });
      await dispatch(actions.save_article(newData));
      dispatch({ type: IndexActionTypes.FETCH_END });
    }
  } catch (error) {
    dispatch({ type: IndexActionTypes.SET_MESSAGE })
  }
}
// export const FetchNewArticle = (data) => (dispatch) => {
//     const {title,content,tags} = data;
//     dispatch({type: IndexActionTypes.FETCH_START})
//     if(title === '') {
//         dispatch({type: IndexActionTypes.SET_MESSAGE,msgContent: '请输入文章标题', msgType: 0})
//     }
//     if(title && content && tags.length > 0) {
//         return axios('/article/addArticle',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'credentials': 'include'
//             },
//             data: {
//                 title: title,
//                 content: content,
//                 tags: tags
//             }
//         }).then((response) => {
//             console.log(response.data)
//             dispatch(actions.save_article(response));
//             dispatch({type: IndexActionTypes.SET_MESSAGE,msgContent: response.message,msgType: response.code})
//             dispatch({type: IndexActionTypes.FETCH_END});
//         }).catch((error) => {
//             console.log(error)
//             dispatch({type: IndexActionTypes.SET_MESSAGE,msgContent: error.message,msgType: error.code})
//         })
//     }
// }
