let actionId = 0;
export function setSelectedClass(text) {
  return {
    type: "SET_CLASS_SELECTION",
    id: actionId++,
    text
  };
}

export function setClasses(classes) {
  return {
    type: "SET_CLASSES",
    id: actionId++,
    classes
  };
}

export function toggleAvgButton(value) {
  return {
    type: "TOGGLE_AVG_BUTTON",
    id: actionId++,
    value
  };
}
