import React from 'react';
import Task1 from './components/main-components/Task1';
import Task2 from './components/main-components/Task2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/task1'>Завдання 1</Link>
            </li>
            <li>
              <Link to='/task2'>Завдання 2</Link>
            </li>
          </ul>
        </nav>

      <Routes>

      <Route path='/task1' element={<Task1/>} />
      <Route path='/task2' element={<Task2/>} />
    
      </Routes>
      </div>
    </Router>
  );
}

export default App;