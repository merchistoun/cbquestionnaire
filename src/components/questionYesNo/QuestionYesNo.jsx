import React from "react";
import Button from "@material-ui/core/Button";
import classnames from "classnames";

import * as actions from "../main/actions";
import * as constants from "../../constants";

import QuestionHeader from "../questionHeader";

import local from "./local.module.scss";

export default props => {
  const { index, item, dispatch, getState } = props;
  const {
    question,
    value = "",
    options: { yes, no },
    error
  } = item;

  const onYes = () => {
    actions.updateItem({ ...item, value: constants.YES, error: false })(
      dispatch,
      getState
    );
  };

  const onNo = () => {
    actions.updateItem({ ...item, value: constants.NO, error: false })(
      dispatch,
      getState
    );
  };

  return (
    <div
      className={classnames("container", error ? "container--required" : null)}
    >
      <QuestionHeader index={index} question={question} required={error} />

      <div className={classnames("max-width-input", local.yesNoContainer)}>
        <Button
          variant="contained"
          color={value === constants.YES ? "secondary" : "default"}
          className={local.button}
          onClick={onYes}
        >
          {yes}
        </Button>

        <Button
          variant="contained"
          color={value === constants.NO ? "secondary" : "default"}
          className={local.button}
          onClick={onNo}
        >
          {no}
        </Button>
      </div>
    </div>
  );
};
