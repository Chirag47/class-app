import { connect } from "react-redux";
import SidePanel from "../components/SidePanel/SidePanel";
import { setSelectedClass } from "../actions/index";

const getClassNames = classes => {
  return classes.map(item => {
    return item.classname;
  });
};
const mapStateToProps = state => ({
  classes: getClassNames(state.classes),
  selectedClass: state.selectedClass
});

const mapDispatchToProps = dispatch => ({
  setSelectedClass: classname => dispatch(setSelectedClass(classname))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel);
