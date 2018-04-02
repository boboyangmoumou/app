// import {get, post} from '../../fetch/fetch.js';
export const FETCH_STARTED = "FETCH_STARTED";
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_CHECK = 'FETCH_CHECK';
export const fetchStart = () => ({
    type: FETCH_STARTED
});

export const fetchSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
});
export const checkSuccess = (checkUser) => ({
    type: FETCH_CHECK,
    checkUser
})

export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    error
})

export const checkUserInfo = () => {
    return (dispatch) => {
        const apiUrl = "/user/checkUserInfo";
        setTimeout(() => {
            // dispatch(fetchStart());
            return fetch(apiUrl,{
                    "credentials": 'include'
            }).then((response) => {
                if(response.status !== 200) {
                    throw new Error(`Fail ${response.status}`);
                }
                response.json().then((responseJson) => {
                    console.log(responseJson);
                    dispatch(checkSuccess(responseJson));
                }).catch((error) => {
                    dispatch(fetchFailure(error))
                });
            }).catch((error) => {
                dispatch(fetchFailure(error))
            })
        },0)
        
    };
}

export const fetchShopcart = (goodInfo) => {
    return (dispatch) => {
        const apiUrl = "./data.json";
            dispatch(fetchStart());
            return fetch(apiUrl).then((response) => {
                if(response.status !== 200) {
                    throw new Error(`Fail ${response.status}`);
                }
                response.json().then((responseJson) => {
                    console.log(responseJson);
                    dispatch(fetchSuccess(responseJson));
                }).catch((error) => {
                    dispatch(fetchFailure(error))
                });
            }).catch((error) => {
                dispatch(fetchFailure(error))
            })
    };
}
