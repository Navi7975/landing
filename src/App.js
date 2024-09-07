import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './component/form'; // Ensure the component name is capitalized
import LandingPage from './LandingPage';
import Login from './component/login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
