import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);


  }
  // const toggleMode1 = () => {
  //   if (mode === 'light') {
  //     setMode('black')
  //     document.body.style.backgroundColor = '#6769a9';
  //     showAlert("Dark mode has been enabled", "success");
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("light mode has been enabled", "success");
  //   }
  // }


  const toggleMode = () => {
    if (mode === 'light') 
    {
      
      setMode('dark')
      document.body.style.backgroundColor = '#0e2f4c';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }

  
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;

