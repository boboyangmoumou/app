import axios from 'axios';
export const actionTypes = {
    GET_ARTICLE_LIST: "GET_ARTICLE_LIST",
    RESPONSE_ARTICLE_LIST: "RESPONSE_ARTICLE_LIST",
    GET_ARTICLE_DETAIL: "GET_ARTICLE_DETAIL",
    RESPONSE_ARTICLE_DETAIL: "RESPONSE_ARTICLE_DETAIL",
    FETCH_START: "FETCH_START"
};

export const actions = {
    get_article_list: function (data)  {
        console.log(data);
        return {
            type: actionTypes.GET_ARTICLE_LIST,
            data
        }
    },
    get_article_detail:function (Detaildata) {
        console.log(Detaildata);
        return {
            type: actionTypes.GET_ARTICLE_DETAIL,
            Detaildata
        }
    },
    fetch_start:() => ({
        type: actionTypes.FETCH_START
    }),
};

export const fetchArticle = (tag) => {
    return (dispatch) => {
        const apiUrl = "/index/getArticles"
        return axios.get(apiUrl,{
            params: {
                tag: tag
            },
            header: {
                'Content-Type': 'application/json;charset=utf-8',
                'credentials': 'include'
            },
        }).then((response) => {
            // if(response.status !== 200){
            //     throw new Error(`Fail ${response.status}`)
            // }
            console.log(response.data)
            dispatch(actions.get_article_list(response.data))
        })
    }
}
export const fetchArticleDetail = (id) => {
    console.log(id)
    return (dispatch) => {
        dispatch(actions.fetch_start())
        const apiUrl = "/index/getAticleDetail"
        return axios.get(apiUrl,{
            params: {
                id: id
            },
            header: {
                'Content-Type': 'application/json;charset=utf-8',
                'credentials': 'include'
            },
        }).then((response) => {
            // if(response.status !== 200){
            //     throw new Error(`Fail ${response.status}`)
            // }
            console.log(response.data)
            dispatch(actions.get_article_detail(response.data))
        })
    }
}