import React, { Component } from "react";
import classes from "./ide.module.css";
import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import { code } from "./defaultCode";

export default class ReadIde extends Component {
  state = {
    code: code.cpp,
    result: "Submit Code to See Result",
    lang: "cpp",
  };

  render() {
    const options = {
      selectOnLineNumbers: true,
      renderIndentGuides: true,
      colorDecorators: true,
      cursorBlinking: "blink",
      autoClosingQuotes: "always",
      find: {
        autoFindInSelection: "always",
      },
      snippetSuggestions: "inline",
      readOnly: true,
    };
    console.log(this.state);
    return (
      <>
        <div className="container">
          <div className={classes.inputarea}>
            <div type="text" className={classes.readIDE}>
              <MonacoEditor
                width="500"
                height="250"
                language={this.state.lang}
                theme="vs-dark"
                value={this.state.code}
                options={options}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
