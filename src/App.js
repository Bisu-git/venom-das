// import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, {useState} from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <div className="container">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter The text to Analyze below" />
    </div>
  );
}

export default App;
