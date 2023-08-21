import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';
import Main from './components/Main';

function App() {

  const [token, setToken] = useState('');
  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      console.log(json.access_token);
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <>
        { 
           (token === '') 
             ? <Login />  
             : <Main token={token}/>
        }
    </>
  );
}

export default App;
