import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import * as constants from "../../constants";

import local from "./local.module.scss";

export default props => {
  const { loadStatus, onLoad } = props;

  React.useEffect(() => {
    if (onLoad && loadStatus === constants.LOAD_STATUS.REQUIRED) {
      onLoad();
    }
  }, [loadStatus, onLoad]);

  return loadStatus === constants.LOAD_STATUS.LOADED ? (
    <>{props.children}</>
  ) : (
    <CircularProgress className={local.spinner} />
  );
};
