import axios from 'axios';
import {get,post} from '../../fetch/fetch';
import {actionsTypes as IndexActionTypes} from './user';
export const actionTypes = {
    UPDATING_TITLE:"UPDATING_TITLE",
    UPDATING_CONTENT:"UPDATING_CONTENT",
    UPDATING_TAGS:"UPDATING_TAGS",
    SAVE_ARTICLE:"SAVE_ARTICLE",
    SET_ARTICLE_ID:"SET_ARTICLE_ID"
}

export const actions = {
    epdate_title:function (title) {
        return {
            type: actionTypes.UPDATING_TITLE,
            title
        }
    },
    update_content:function(content) {
        return {
            type:actionTypes.UPDATING_CONTENT,
            content
        }
    },
    update_tags:function (tags) {
        return {
            type:actionTypes.UPDATING_TAGS,
            tags
        }
    },
    save_article:function (data) {
        return {
            type:actionTypes.SAVE_ARTICLE,
            data
        }
    }
};

// export const FetchNewArticle = (data) => {
//     const {title,content,tags} = data;
//     return (dispatch) => {
//         const apiUrl = "/article/addArticle";
//         return axios(apiUrl,{
//             method: 'POST',
//             header: {
//                 'Content-Type': 'application/json',
//                 'credentials': 'include'
//             },
//             data: {
//                 title:title,
//                 content:content,
//                 tags:tags
//             }
//         }).then((response) => {
//             if(response.status !== 200) {
//                 throw new Error(`Fail ${response.status}`)
//             }
//             console.log(response.data)
//             dispatch(actions.save_article)
//         })
//     }
// }

export const FetchNewArticle = (data) => async (dispatch) => {
    const {title,content,tags} = data;
    try {
        dispatch({type: IndexActionTypes.FETCH_START})
        let {data} = await post('/article/addArticle',`title=${title}``content=${content}``tags=${tags}`)
        console.log(data);
        await dispatch(actions.save_article(data));
        dispatch({type: IndexActionTypes.FETCH_END})
    } catch(error) {
        dispatch({type: IndexActionTypes.SET_MESSAGE})
    }
}
