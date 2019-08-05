import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <form className="form-area">
          <label class="input-label">
            <h1 class="static-heading">Enter your markdowned text below:</h1>
          </label>
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
