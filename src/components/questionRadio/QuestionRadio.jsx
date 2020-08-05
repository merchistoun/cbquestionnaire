import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import classnames from "classnames";

import * as actions from "../main/actions";

import QuestionHeader from "../questionHeader";

import local from "./local.module.scss";

export default props => {
  const { index, item, dispatch, getState } = props;
  const { question, value = -1, options, error } = item;

  const onCheckRequired = () => {
    const error = item.required && !item.value;
    actions.updateItem({ ...item, error })(dispatch, getState);
  };

  const onChange = e => {
    actions.updateItem({ ...item, value: e.target.value, error: false })(
      dispatch,
      getState
    );
  };

  return (
    <div
      className={classnames("container", error ? "container--required" : null)}
      onBlur={onCheckRequired}
      onClick={onCheckRequired}
    >
      <QuestionHeader index={index} question={question} required={error} />

      <div className="max-width-input">
        <RadioGroup onChange={onChange} value={`${value}`}>
          <div className={local.radioContainer}>
            {options.map(option => (
              <FormControlLabel
                key={`radio${option.value}`}
                value={`${option.value}`}
                label={option.name}
                control={<Radio color="primary" />}
              />
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
