import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label class="input-label">
            &nbsp;Enter your markdowned text below:
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
