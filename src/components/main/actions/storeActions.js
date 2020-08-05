import * as t from "../../../Stores/main/actionTypes";

export const setLoadStatus = loadStatus => ({
  type: t.SET_LOAD_STATUS,
  payload: loadStatus
});

export const setUserStatus = userStatus => ({
  type: t.SET_USER_STATUS,
  payload: userStatus
});

export const setQuestionPack = questionPack => ({
  type: t.SET_QUESTION_PACK,
  payload: questionPack
});

export const updateItem = item => ({
  type: t.UPDATE_ITEM,
  payload: item
});
