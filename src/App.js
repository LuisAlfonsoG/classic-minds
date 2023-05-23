import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';
import SearchComponent from './SearchComponent';

function App() {

  const [token, setToken] = useState('');
  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <>
        { 
          (token === '') 
            ? <Login />  
            : <>
                <SearchComponent token={token}/>
                

              </> 
        }
    </>
  );
}

export default App;
