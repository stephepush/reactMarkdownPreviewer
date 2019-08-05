import React from "react";
import ReactDOM from "react-dom";

//import ReactFCCtest from "react-fcctest";

import "./styles.css";

import Container from "./Container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Container />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
