import React from "react";
import PropTypes from "prop-types";
import { Layout, Button } from "element-react";
import "./MainPanel.css";
import Badge from "./StudentBadge/StudentBadge";

function MainPanelHeader(props) {
  return (
    <div className="headingContainer">
      <Layout.Row className="headingRow">
        <div className="classDetailColumn">
          <h2>{props.classObject.classname}</h2>
          <h6>{props.classObject.students.length} Students</h6>
        </div>
        <div className="buttonColumn">
          <Button
            className="button"
            type={props.showAverage ? "default" : "primary"}
          >
            <div onClick={() => props.clickHandler(props.showAverage)}>
              {props.showAverage ? "Show Average" : "Hide Average"}
            </div>
          </Button>
        </div>
      </Layout.Row>
      <Layout.Row
        gutter="20"
        style={
          props.showAverage === false
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <Layout.Col span="18" offset="3" className="averageDetails">
          Classroom Average Performance: {props.classAverage}%
        </Layout.Col>
      </Layout.Row>
    </div>
  );
}
MainPanelHeader.propTypes = {
  classAverage: PropTypes.string.isRequired,
  showAverage: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  classObject: PropTypes.exact({
    classname: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        marks: PropTypes.exact({
          English: PropTypes.number.isRequired,
          Science: PropTypes.number.isRequired,
          Maths: PropTypes.number.isRequired
        })
      })
    )
  })
};
const MainPanel = ({
  classObject,
  classAverage,
  showAverage,
  toggleAvgButton
}) => {
  return (
    <Layout.Col span="20" className="mainPanel">
      {classObject && (
        <React.Fragment>
          <MainPanelHeader
            classObject={classObject}
            classAverage={classAverage}
            clickHandler={toggleAvgButton}
            showAverage={showAverage}
          />
          <div className="badgeList">
            {classObject.students &&
              classObject.students.map(function(student) {
                return <Badge student={student} key={student.name} />;
              })}
          </div>
        </React.Fragment>
      )}
      {!classObject && (
        <div className="empty">
          <span>Select a Class</span>
        </div>
      )}
    </Layout.Col>
  );
};

export default MainPanel;
