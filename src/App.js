import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';

export default function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled', 'Success:');
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert('Lights Mode has been Enabled', 'Success:');
    }
  };
  

  return (
    <>
      <Navbar title="QasWeb" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container-my-4">
        <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
      </div>
    </>
  );
}
