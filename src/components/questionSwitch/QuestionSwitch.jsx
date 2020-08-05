import React from "react";
import QuestionText from "../questionText";
import QuestionRadio from "../questionRadio";
import QuestionYesNo from "../questionYesNo";

// import * as actions from "./actions";

export default props => {
  const { getState } = props;

  const state = getState();
  const { questionPack } = state;

  return questionPack.items?.map((item, index) => (
    <div key={`question_${index}`}>
      {item.type === "text" && <QuestionText item={item} index={index} />}
      {item.type === "radio" && <QuestionRadio item={item} index={index} />}
      {item.type === "yesno" && <QuestionYesNo item={item} index={index} />}
    </div>
  ));
};
