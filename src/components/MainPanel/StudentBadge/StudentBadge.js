import React from "react";
import { Layout, Card, Progress } from "element-react";
import "./StudentBadge.css";
import PropTypes from "prop-types";
function Mark(props) {
  return (
    <Layout.Row>
      <Layout.Col span="8">{props.subjectName}</Layout.Col>
      <Layout.Col span="16">
        <Progress percentage={props.subjectScore} />
      </Layout.Col>
    </Layout.Row>
  );
}

Mark.propTypes = {
  subjectName: PropTypes.string.isRequired,
  subjectScore: PropTypes.number.isRequired
};

export default class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.studentAggregate = this.studentAggregate.bind(this);
  }
  studentAggregate() {
    let total = 0;
    for (let subject in this.props.student.marks) {
      total += this.props.student.marks[subject];
    }
    let numberOfSubjects = Object.keys(this.props.student.marks).length;
    return Number.parseFloat(total / numberOfSubjects).toFixed(2);
  }
  render() {
    return (
      <Card
        className="box-card"
        header={
          <div className="boxHeader">
            <span>{this.props.student.name}</span>
            <span className="percentage">{this.studentAggregate()}%</span>
          </div>
        }
      >
        {Object.keys(this.props.student.marks) &&
          Object.keys(this.props.student.marks).map(function(subject) {
            return (
              <Mark
                key={subject}
                subjectName={subject}
                subjectScore={this.props.student.marks[subject]}
              />
            );
          }, this)}
      </Card>
    );
  }
}
Badge.propTypes = {
  student: PropTypes.exact({
    name: PropTypes.string.isRequired,
    marks: PropTypes.exact({
      English: PropTypes.number.isRequired,
      Science: PropTypes.number.isRequired,
      Maths: PropTypes.number.isRequired
    })
  })
};
