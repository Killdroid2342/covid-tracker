import React, { useState } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

interface Data {
  deaths: number;
  recovered: number;
  cases: number;
}

const App: React.FC = () => {
  const [total, setTotal] = useState<Data | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = (country: string) => {
    let url = `https://disease.sh/v3/covid-19/all`;

    if (country === 'uk') {
      url = `https://disease.sh/v3/covid-19/countries/gb`;
    } else if (country === 'usa') {
      url = `https://disease.sh/v3/covid-19/countries/us`;
    }

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTotal(data);
        console.log(data);
      });
  };

  return (
    <>
      <h1 className='text-center text-white'>Total Covid Cases</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Cases</th>
            </tr>
            <tr>
              <td
                className='border border-green-900 cursor-pointer text-white'
                onClick={() => {
                  setIsModalOpen(true);
                  fetchData('worldwide');
                }}
              >
                WorldWide
              </td>
              <td className='border border-green-900'>Deaths</td>
              <td className='border border-green-900'>Recovered</td>
              <td className='border border-green-900'>Cases</td>
            </tr>
            <tr>
              <td
                className='border border-green-900 cursor-pointer text-white'
                onClick={() => {
                  setIsModalOpen(true);
                  fetchData('uk');
                }}
              >
                UK
              </td>
              <td className='border border-green-900'>Deaths</td>
              <td className='border border-green-900'>Recovered</td>
              <td className='border border-green-900'>Cases</td>
            </tr>
            <tr>
              <td
                className='border border-green-900 cursor-pointer text-white'
                onClick={() => {
                  setIsModalOpen(true);
                  fetchData('usa');
                }}
              >
                USA
              </td>
              <td className='border border-green-900'>Deaths</td>
              <td className='border border-green-900'>Recovered</td>
              <td className='border border-green-900'>Cases</td>
            </tr>
          </tbody>
        </table>
        {isModalOpen && (
          <div className='modal'>
            <div className='text-center border-2 border-white'>
              <div className='border-2 border-white flex flex-row'>
                <div className='text-white border-2 border-red-900'>
                  <p>Total Death</p>
                  {total?.deaths}
                </div>
                <div className='text-white border-2 border-green-900'>
                  <p>Total Recovered</p>
                  {total?.recovered}
                </div>
                <div className='text-white border-2 border-yellow-400'>
                  <p>Total Cases</p>
                  {total?.cases}
                </div>
              </div>
              <div className='text-white border-2 border-white rounded-md h-96'>
                <VictoryPie
                  data={[
                    { x: 'Deaths', y: total?.deaths },
                    { x: 'Cases', y: total?.cases },
                    { x: 'Recovered', y: total?.recovered },
                  ]}
                  colorScale={['red', 'yellow', 'green']}
                  labelComponent={<VictoryLabel style={{ fill: 'white' }} />}
                />
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className='text-red-800'
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
