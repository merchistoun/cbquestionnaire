import React from "react";

import reducer, { initialState } from "./reducer";

const State = React.createContext({});
const Dispatch = React.createContext({});

const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

const useState = () => {
  const state = React.useContext(State);
  if (state === undefined) {
    throw new Error("useState must be used within a Provider");
  }
  return state;
};

const useDispatch = () => {
  const dispatch = React.useContext(Dispatch);
  if (dispatch === undefined) {
    throw new Error("useDispatch must be used within a Provider");
  }
  return dispatch;
};

export { StoreProvider, useState, useDispatch };
