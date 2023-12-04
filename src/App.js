import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage'; // Make sure this path is correct
import Task from './Task';
import DcProgress from './DcProgress';

function App() {
  const [checkedCount, setCheckedCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checklist/:environment/:dataCenter" element={
          <div className="App">
            {/* You can use URL parameters in these components if needed */}
            <Task checkedCount={checkedCount} setCheckedCount={setCheckedCount} />
            <DcProgress checkedCount={checkedCount} />
          </div>
        } />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
