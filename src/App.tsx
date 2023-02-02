import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

interface Data {
  deaths: number;
  recovered: number;
  cases: number;
}

const App: React.FC = () => {
  const [total, setTotal] = useState<Data | undefined>();

  fetch('https://disease.sh/v3/covid-19/all')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setTotal(data);
    });

  return (
    <>
      <h1 className='text-center text-white'>Today's Covid Cases</h1>
      <form action=''>
        <input type='text' placeholder='Enter Country'></input>
      </form>
      <div className='border-2 border-white flex flex-row'>
        <div className='text-white border-2 border-red-900'>
          <p>Daily Total Death</p>
          {total?.deaths}
        </div>
        <div className='text-white border-2 border-green-900'>
          <p>Daily Total Recovered</p>
          {total?.recovered}
        </div>
        <div className='text-white border-2 border-yellow-400'>
          <p>Daily Total Cases</p>
          {total?.cases}
        </div>
      </div>
      <div className='text-white border-2 border-white rounded-md'>
        GRAPH GOES HERE
      </div>
    </>
  );
};

export default App;
