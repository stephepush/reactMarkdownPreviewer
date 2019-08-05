import React from "react";
import marked from "marked";
import insane from "insane";

class Previewer extends React.Component {
  parseMarkdownText = () => {
    var rawMarkup = marked(this.props.textStuff);
    var sanitizedMarkup = insane(rawMarkup);
    return { __html: sanitizedMarkup };
  };
  render() {
    return (
      <div id="preview" dangerouslySetInnerHTML={this.parseMarkdownText()} />
    );
  }
}

export default Previewer;
