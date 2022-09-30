import React, { useState, useEffect } from 'react';
import Login from '../Login';
import Board from '../Main/index'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => { setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));}, []);

  return (
    <>
      {isAuthenticated ? (
        <Board setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default App;