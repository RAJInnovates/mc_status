import React, { useState } from "react";
import './App.css';
import Task from './Task';
import DcProgress from './DcProgress';

function App() {
  const [checkedCount, setCheckedCount] = useState(0);
  return (
    <div className="App">
      <Task checkedCount={checkedCount} setCheckedCount={setCheckedCount} />
      <DcProgress checkedCount={checkedCount} />
    </div>
  );
}

export default App;

