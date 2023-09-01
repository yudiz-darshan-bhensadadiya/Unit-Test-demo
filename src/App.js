import React from 'react';
import './App.css';
import TripForm from './shared/components/TripForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <h1 className='header'>Yudiz Trip Form</h1><span className='underline'></span>
      <TripForm />
    </div>
  );
}

export default App;
