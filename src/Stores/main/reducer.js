import * as t from "./actionTypes";
import * as constants from "../../constants";

export const initialState = {
  loadStatus: constants.LOAD_STATUS.REQUIRED,
  userStatus: constants.USER_STATUS.INCOMPLETE,
  questionPack: {}
};

export default (state, action) => {
  switch (action.type) {
    case t.SET_LOAD_STATUS: {
      return {
        ...state,
        loadStatus: action.payload
      };
    }

    case t.SET_USER_STATUS: {
      return {
        ...state,
        userStatus: action.payload
      };
    }

    case t.SET_QUESTION_PACK: {
      return {
        ...state,
        questionPack: action.payload
      };
    }

    case t.UPDATE_ITEM: {
      return {
        ...state,
        questionPack: {
          ...state.questionPack,
          items: state.questionPack.items.map(item =>
            item.id === action.payload.id ? action.payload : item
          )
        }
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
