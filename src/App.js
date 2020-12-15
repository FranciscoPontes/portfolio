import React from 'react';
import Layout from './Components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
