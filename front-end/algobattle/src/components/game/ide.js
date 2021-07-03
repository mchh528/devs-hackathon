import React, { Component } from "react";
import classes from "./ide.module.css";
import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import { code } from "./defaultCode";

export default class Ide extends Component {
  state = {
    code: code.cpp,
    result: "Submit Code to See Result",
    lang: "cpp",
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    alert("submit code");
    axios
      .post(`http://localhost:8000/api/code/submit`, this.state)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.err) {
          // Error in user code
          this.setState({
            result: data.error,
          });
        } else {
          this.setState({
            result: data.output,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onCodeChangeHandler = (newCode, e) => {
    console.log(e);
    this.setState({
      code: newCode,
    });
  };
  onInputChangeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  editorDidMount = (e) => {
    console.log("EDITOR MOUNTED");
  };

  onLangSelectHandler = (e) => {
    const lang = e.target.value;
    this.setState({
      lang,
      code: code[lang],
    });
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
    };
    console.log(this.state);
    return (
      <>
        <div className="container">
          <div className={classes.body}>
            <div className={classes.inputarea}>
              <select
                className={classes.selectLang}
                onChange={(e) => this.onLangSelectHandler(e)}
              >
                <option value="cpp">C++</option>
                <option value="c">C</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
              </select>
              <p className={classes.text}>Code here:</p>
              <div type="text" className={classes.code}>
                <MonacoEditor
                  width="1000"
                  height="500"
                  language={this.state.lang}
                  theme="vs-dark"
                  value={this.state.code}
                  options={options}
                  onChange={this.onCodeChangeHandler}
                  editorDidMount={this.editorDidMount}
                />
              </div>
            </div>
            <div className={classes.inputarea}>
              <p className={classes.text}>Input:</p>
              <textarea
                type="text"
                className={classes.input}
                value={this.state.input}
                onChange={this.onInputChangeHandler}
              ></textarea>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.actions}>
              <button onClick={this.onSubmitHandler}>Submit Code</button>
            </div>
            <div className={classes.inputarea}>
              <textarea
                type="text"
                className={classes.result}
                value={this.state.result}
                disabled={true}
              ></textarea>
            </div>
          </div>
        </div>
      </>
    );
  }
}
