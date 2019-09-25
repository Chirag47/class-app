import React from "react";
import "./SidePanel.css";
import { Layout } from "element-react";
import PropTypes from "prop-types";

function SelectClass(props) {
  return (
    <div>
      {props.classes &&
        props.classes.map(function(item) {
          return (
            <Layout.Row key={item}>
              <Layout.Col offset="1">
                <div
                  className={
                    props.selectedClass === item ? "name active" : "name"
                  }
                  onClick={props.handleClick.bind(null, item)}
                >
                  {item}
                </div>
              </Layout.Col>
            </Layout.Row>
          );
        }, this)}
    </div>
  );
}

SelectClass.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func.isRequired,
  selectedClass: PropTypes.string.isRequired
};

const SidePanel = ({ classes, selectedClass, setSelectedClass }) => {
  return (
    <Layout.Col span="4" className="sidePanel">
      <Layout.Row className="heading">
        <h3> School: XYZ </h3>
      </Layout.Row>
      <SelectClass
        classes={classes}
        selectedClass={selectedClass}
        handleClick={setSelectedClass}
      />
    </Layout.Col>
  );
};
export default SidePanel;
