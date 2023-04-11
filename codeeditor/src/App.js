import {useState} from 'react'
import './App.css';
import Editor from "@monaco-editor/react";
import NavBar from './components/NavBar';
import Axios from 'axios';
import spinner from './spinner.svg';

function App() {

  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState("python");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize
  }

  function compile()
  {
    setLoading(true);
    if(userCode===``)
    {
      return
    }
  }

  Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput }).then((res) => {
      setUserOutput(res.data.output);
      console.log(res.data.output);
    }).then(() => {
      setLoading(false);
    })


  function clearOutput()
  {
    setUserOutput("");
  }
  return (
    <div className="App">
      <NavBar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />
      <div className="main">
        <div className="left-container">
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => { setUserCode(value) }}
          />
          <button className="run-btn" onClick={() => compile()}>
             Run
          </button>
        </div>
        <div className="right-container">
          <h4>Input:</h4>
          <div className="input-box">
            <textarea id="code-inp" onChange=
              {(e) => setUserInput(e.target.value)}>
            </textarea>
          </div>
          <h4>Output:</h4>
          {loading ? (
            <div className="spinner-box">
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button onClick={() => { clearOutput() }}
                 className="clear-btn">
                 Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
