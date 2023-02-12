import React, { useEffect } from 'react';
import { TCountryData } from '../../App';

interface Props {
  setIsModalOpen: any;
  countryData: TCountryData[];
  setSelectedData: any;
}

const Table = ({ setIsModalOpen, countryData, setSelectedData }: Props) => {
  const handleRowClick = (data: TCountryData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  return (
    <div>
      <table>
        <thead className='text-white'>
          <tr className='border border-white overflow-auto'>
            <td>Countries</td>
            <td>Deaths</td>
            <td>Recovered</td>
            <td>Cases</td>
            <td>Tests</td>
            <td>Cases Today</td>
            <td>Deaths Today</td>
            <td>Recovered Today</td>
            <td>Critical</td>
            <td>Continent</td>
          </tr>
        </thead>
        <tbody>
          {countryData.map((data, i) => (
            <tr
              key={i}
              className='border border-green-900 cursor-pointer text-white'
              onClick={() => handleRowClick(data)}
            >
              <td>{data.name}</td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.deaths}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.recovered}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.cases}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.tests}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.todayCases}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.todayDeaths}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.todayRecovered}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.critical}
              </td>
              <td className='border border-green-900 text-white'>
                {data.data && data.data.continent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
