import { combineReducers } from "redux";

const selectedClass = (state = "", action) => {
  if (action.type === "SET_CLASS_SELECTION") {
    return action.text;
  }
  return state;
};
const classes = (state = [], action) => {
  if (action.type === "SET_CLASSES") {
    return [...state, ...action.classes];
  }
  return state;
};

const showAverage = (state = true, action) => {
  if (action.type === "TOGGLE_AVG_BUTTON") {
    return !action.value;
  }
  return state;
};

export default combineReducers({
  selectedClass,
  showAverage,
  classes
});
