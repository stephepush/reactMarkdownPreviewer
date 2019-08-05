import React from "react";
import { Helmet } from "react-helmet";
import favicon from "./favicon.ico";
import Editor from "./Editor";
import Previewer from "./Previewer";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownInput: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    fetch("/defaultText.txt")
      .then(response => response.text())
      .then(data => {
        this.setState({
          markdownInput: data
        });
      });
    //.catch(error => console.log("parsing failed", error));
  }

  handleTextChange = event => {
    this.setState({
      markdownInput: event.target.value
    });
  };

  render() {
    //let textInput = this.handleTextChange;

    return (
      <div id="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title lang="en">Stephen's Markdown Previewer</title>
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <Editor
          defaultText={this.state.markdownInput}
          onChange={this.handleTextChange}
        />
        <Previewer
          textStuff={this.state.markdownInput}
          value={this.state.markdownInput}
        />
      </div>
    );
  }
}

export default Container;
