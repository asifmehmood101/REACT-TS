import React from 'react';
import './App.css';
import TsComponent from './TsComponent';

function App() {
  return (
    <div className='App'>
      <TsComponent
        text='hello-from -here'
        personDetail={{ firstName: 'asif', lastName: 'Mehmood' }}
        HandleChange={(e) => {
          e.preventDefault();
          console.log('hello');
        }}
      />
    </div>
  );
}

export default App;
