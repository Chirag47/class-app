import { connect } from "react-redux";
import MainPanel from "../components/MainPanel/MainPanel";
import { toggleAvgButton } from "../actions/index";

const getClass = (classes, classname) => {
  return classes.filter(item => item.classname === classname)[0];
};

const getClassAverage = (classes, classname) => {
  const classObject = getClass(classes, classname);
  let total = 0;
  if (classObject) {
    let students = classObject.students;
    students.forEach(student => {
      let studentTotal = 0;
      for (let key in student.marks) {
        studentTotal += student.marks[key];
      }
      studentTotal = studentTotal / Object.keys(student.marks).length;
      total += studentTotal;
    });
    return Number.parseFloat(total / classObject.students.length).toFixed(2);
  }
  return 0;
};

const getShowAverage = state => {
  return state.showAverage;
};

const mapStateToProps = state => ({
  classObject: getClass(state.classes, state.selectedClass),
  classAverage: getClassAverage(state.classes, state.selectedClass),
  showAverage: getShowAverage(state)
});

const mapDispatchToProps = dispatch => ({
  toggleAvgButton: value => dispatch(toggleAvgButton(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPanel);
