import React from "react";
import "./App.css";
import MyLayout from "./components/Layout/Layout";
import data from "./classroom_data.json";
import { setClasses } from "./actions/index";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    window.store.dispatch(setClasses(data));
  }

  render() {
    return (
      <div>
        <MyLayout />
      </div>
    );
  }
}
