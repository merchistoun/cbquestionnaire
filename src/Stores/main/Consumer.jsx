/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";

import { useDispatch, useState } from "./context";

export const Consumer = WrappedComponent => props => {
  const state = useState();
  const dispatch = useDispatch();
  const getState = () => ({ ...state });

  return (
    <WrappedComponent {...props} getState={getState} dispatch={dispatch} />
  );
};
