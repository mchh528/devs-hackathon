import React, { Component } from "react";
import classes from "./ide.module.css";
import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import { code } from "./defaultCode";

export default class ReadIde extends Component {

  grab_opponent_code = () => {
    let id = localStorage.getItem('username');
    console.log(id);
    console.log("okkkk");
    axios.get(`http://localhost:5000/api/code/submit/${id}`).then( (all_info) => {
      return all_info.data.code})
  };

  dis = () => {
    this.oppo_code = this.grab_opponent_code();
  }

  here = setInterval(this.dis, 30000);

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
                value={this.oppo_code}
                options={options}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
