import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Enter your marked-downed text here:</label>
          <br />
          <textarea
            type="text"
            id="editor"
            onChange={this.props.onChange}
            className="textInputArea"
            //value={this.props.markdownInput}
            value={this.props.defaultText}
          />
        </form>
      </div>
    );
  }
}

export default Editor;
