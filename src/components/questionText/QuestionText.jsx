import React from "react";
import TextField from "@material-ui/core/TextField";
import classnames from "classnames";

import * as actions from "../main/actions";

import QuestionHeader from "../questionHeader";

import local from "./local.module.scss";

export default props => {
  const { index, item, dispatch, getState } = props;
  const { question, value = "", hint, maxLength, multiline, error } = item;

  const onCheckRequired = () => {
    const error = item.required && !item.value;
    actions.updateItem({ ...item, error })(dispatch, getState);
  };

  const onChange = e => {
    actions.updateItem({ ...item, value: e.target.value })(dispatch, getState);
  };

  const inputProps = {
    maxLength
  };

  return (
    <div
      className={classnames("container", error ? "container--required" : null)}
      onBlur={onCheckRequired}
    >
      <QuestionHeader index={index} question={question} required={error} />

      <div className="max-width-input">
        <TextField
          value={value}
          className={local.input}
          label={hint}
          onBlur={onCheckRequired}
          onChange={onChange}
          required={error}
          error={error}
          inputProps={inputProps}
          multiline={multiline}
        />
      </div>
    </div>
  );
};
