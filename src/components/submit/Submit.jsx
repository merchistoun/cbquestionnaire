import React from "react";
import local from "./local.module.scss";

// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import * as actions from "../main/actions";

export default props => {
  const { dispatch, getState } = props;

  const onSubmit = () => {
    actions.onSubmit()(dispatch, getState);
  };

  return (
    <div className={local.submit}>
      <Button
        variant="contained"
        color="primary"
        className={local.button}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
