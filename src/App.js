import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+ cls);
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar  title="Textutils" AboutText="About Textutils"/> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils- Word counter, character counter, remove extra spaces" mode={mode} />
            </Route>
          </Switch>
          {/* <About /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
