import React from "react";

import Main from "../../containers/Main";
import Aside from "../../containers/Aside";
import "./Layout.css";
import { Layout } from "element-react";
export default class MyLayout extends React.Component {
  render() {
    return (
      <Layout.Row className="layout">
        <Aside />
        <Main />
      </Layout.Row>
    );
  }
}
