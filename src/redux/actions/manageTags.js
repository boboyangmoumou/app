import { get, post } from '../../fetch/fetch';
import { actionsTypes as IndexActionTypes } from './user';
export const actionTypes = {
  GET_ALL_TAGS: "GET_ALL_TAGS",
  SET_TAGS: "RESPONSE_GET_ALL_TAGS",
  DELETE_TAG: "DELETE_TAG",
  ADD_TAG: "ADD_TAG"
}

export const actionsType = {
  get_all_tags: function (data) {
    return {
      type: actionTypes.GET_ALL_TAGS,
      data
    }
  },
  delete_tag: function (name) {
    return {
      type: actionTypes.DELETE_TAG,
      name
    }
  },
  add_tag: function (name) {
    return {
      type: actionTypes.ADD_TAG,
      name
    }
  }
}

export const fetchTag = () => async (dispatch) => {
  try {
    dispatch({ type: IndexActionTypes.FETCH_START })
    let { data } = await get('/index/getAllTags');
    let tempArr = [];
    for (let i = 0; i < data.length; i++) {
      tempArr.push(data[i].name)
    }
    await dispatch(actionsType.get_all_tags(tempArr))
    dispatch({ type: IndexActionTypes.FETCH_END })
  } catch (error) {
    dispatch({ type: IndexActionTypes.SET_MESSAGE })
  }
}

export const fetchDeltag = (removedTag) => async (dispatch) => {
  try {
    dispatch({ type: IndexActionTypes.FETCH_START })
    let { data } = await get(`/tags/delTag?name=${removedTag}`);
    await dispatch(actionsType.delete_tag(data))
    dispatch({ type: IndexActionTypes.FETCH_END })
  } catch (error) {
    dispatch({ type: IndexActionTypes.SET_MESSAGE })
  }
}
export const fetchAddTag = (addTag) => async (dispatch) => {
  try {
    dispatch({ type: IndexActionTypes.FETCH_START })
    let { data } = await post('/tags/addTag', `name=${addTag}`);
    await dispatch(actionsType.add_tag(data))
    dispatch({ type: IndexActionTypes.FETCH_END })
  } catch (error) {
    dispatch({ type: IndexActionTypes.SET_MESSAGE })
  }
}