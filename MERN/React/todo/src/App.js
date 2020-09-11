import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form';
import Todo from './Components/Todo';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Form tasks={list} setTasks={setList}/>
      <Todo tasks={list} setTasks={setList} />
    </div>
  );
}

export default App;
