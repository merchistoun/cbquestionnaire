import React from "react";
import classnames from "classnames";

import Spinner from "../spinner";
import QuestionSwitch from "../questionSwitch";
import Submit from "../submit";
import * as constants from "../../constants";

import * as actions from "./actions";

import Icon from "./q.svg";
import local from "./local.module.scss";

export default props => {
  const { dispatch, getState } = props;

  const state = getState();
  const { questionPack, userStatus } = state;

  const onLoad = () => actions.onLoad()(dispatch, getState);

  return (
    <>
      <div className={local.panel}>
        <div className={local.headingPrimary}>
          <div className={local.siteName}>SiteName</div>
          <div className={local.cloudbooking}>Cloudbooking</div>
        </div>
        <div className={local.headingSub}>
          <div className={local.tabContents}>
            <img src={Icon} width={32} alt="" />
            Visitor Questionnaire
          </div>
        </div>
      </div>

      <Spinner loadStatus={state.loadStatus} onLoad={onLoad}>
        <div className={local.lowerPanel}>
          {userStatus === constants.USER_STATUS.INCOMPLETE ? (
            <>
              <div className={classnames("max-width-instruction", local.introText)}>
                {questionPack.introText}
              </div>
              <QuestionSwitch />
              <Submit />
            </>
          ) : (
            <div
              className={classnames("max-width-instruction", local.outroText)}
            >
              {questionPack.outroText}
            </div>
          )}
        </div>
      </Spinner>
    </>
  );
};
