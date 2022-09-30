import React from 'react';
import Logout from '../Logout';

const TopAdmin = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <>
      <h1>Admin panel</h1>
      <div className="parent-input">
        <button className="inputSub" onClick={() => setIsAdding(true)}>Add Employee</button>
        <Logout className="muted-button" setIsAuthenticated={setIsAuthenticated} />
      </div>
    </>
  );
};

export default TopAdmin;