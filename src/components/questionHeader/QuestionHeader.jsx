import React from "react";
import classnames from "classnames";

import local from "./local.module.scss";

export default props => {
  const { index, question, required } = props;

  return (
    <div className={classnames("max-width-question", local.header)}>
      <div className={local.title}>
        <div className={local.questionNumber}>Question {index + 1}</div>
        {required && (
          <div className={local.requiredLabel}>
            This question requires an answer
          </div>
        )}
      </div>

      <div className={local.questionText}>{question}</div>
    </div>
  );
};
