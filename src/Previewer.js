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
      <div>
        <h2 class="static-heading">&nbsp; View formatted output below:</h2>
        <div id="preview" dangerouslySetInnerHTML={this.parseMarkdownText()} />
      </div>
    );
  }
}

export default Previewer;
