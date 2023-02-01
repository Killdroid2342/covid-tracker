import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1 className='text-center text-white'>Covid Tracker</h1>
      <div className='border-2 border-white flex flex-row'>
        <div className='text-white border-2 border-red-900'>Death</div>
        <div className='text-white border-2 border-green-900'>Recovered</div>
        <div className='text-white border-2 border-yellow-400'>Infected</div>
      </div>
      <div className='text-white border-2 border-white rounded-md'>Data</div>
    </React.Fragment>
  );
}

export default App;
