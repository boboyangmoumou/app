export const actionsTypes = {
    FETCH_START: "FETCH_START",
    FETCH_END: "FETCH_END",
    USER_LOGIN: "USER_LOGIN",
    RESPONSE_USER_INFO: "RESPONSE_USER_INFO",//收到登录信息
    SET_MESSAGE: "SET_MESSAGE", //设置全局提醒
    USER_AUTH:"USER_AUTH"
};
export const actions = {
    get_login:  (username, password) => ({
        type: actionsTypes.USER_LOGIN,
        username,
        password        
    }),
    clear_msg: (msg,status) => ({
        type: actionsTypes.SET_MESSAGE,
        status: status,
        msg: msg
    }),
    user_auth: ()  => ({
        type: actionsTypes.USER_AUTH
    }),
    fetch_start:() => ({
        type: actionsTypes.FETCH_START
    }),
    fetch_end:() => ({
        type: actionsTypes.FETCH_END
    }),
    reaponse_data: (data) => ({
        type: actionsTypes.RESPONSE_USER_INFO,
        data
    })
}
export const fetchUser = (userName,userPwd) => {
    return (dispatch) => {
        const apiUrl = "/user/login"
        dispatch(actions.fetch_start())
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `userName=${userName}&userPwd=${userPwd}`
        }).then((response) => {
            if(response.status !==200) {
                throw new Error(`Fail ${response.status}`)
            }
            response.json().then((responseJson) => {
                console.log(responseJson.msg)
                dispatch(actions.clear_msg(responseJson.msg,responseJson.status));
                dispatch(actions.reaponse_data(responseJson))
            })
            dispatch(actions.fetch_end())
        }).catch(() => {
            dispatch(actions.clear_msg())
        })
    };
}

