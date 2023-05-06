import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<h1>hi</h1>}
      />
    </Routes>
  </Router>
);

export default App;
