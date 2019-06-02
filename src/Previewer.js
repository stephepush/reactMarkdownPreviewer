import React from "react";
import ReactMarkdown from "react-markdown";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview">
        <ReactMarkdown source={this.props.textStuff} />
      </div>
    );
  }
}

export default Previewer;
