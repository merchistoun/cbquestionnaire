import * as storeActions from "./storeActions";
import * as constants from "../../../constants";

export const onLoad = () => (dispatch, getState) => {
  const questionPack = getExampleQuestions();

  dispatch(storeActions.setQuestionPack(questionPack));
  dispatch(storeActions.setLoadStatus(constants.LOAD_STATUS.LOADED));
  dispatch(storeActions.setUserStatus(constants.USER_STATUS.INCOMPLETE));
};

export const updateItem = item => (dispatch, getState) => {
  dispatch(storeActions.updateItem(item));
};

export const onSubmit = () => (dispatch, getState) => {
  const state = getState();
  const {
    questionPack: { items }
  } = state;

  let anyErrors = false;
  items.forEach(item => {
    const error = item.required && !item.value;
    anyErrors = anyErrors || error;
    dispatch(storeActions.updateItem({ ...item, error }));
  });

  if (!anyErrors) {
    dispatch(storeActions.setUserStatus(constants.USER_STATUS.COMPLETE));
  }
};

const getExampleQuestions = () => ({
  introText: "Intro text. This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text This is very long intro text.",
  outroTextPass: "Outro text",
  outroTextFail: "Outro text",
  items: [
    {
      id: 100,
      question: "This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question This is a very long question.",
      hint: "Answer",
      type: "text",
      maxLength: 10,
      required: true
    },
    {
      id: 1,
      question: "Text 10 required",
      hint: "Answer",
      type: "text",
      maxLength: 10,
      required: true
    },
    {
      id: 2,
      question: "Text 50",
      hint: "Answer",
      type: "text",
      maxLength: 50,
      required: false,
      multiline: true
    },
    {
      id: 3,
      question: "Three Radio Buttons",
      type: "radio",
      required: true,
      options: [
        { name: "Radio 1", value: 1 },
        { name: "Radio 2", value: 2 },
        { name: "Radio 3", value: 3 }
      ]
    },
    {
      id: 4,
      question: "Do you have COVID-19?",
      type: "yesno",
      required: true,
      options: { yes: "YES", no: "NO" }
    }
  ]
});
