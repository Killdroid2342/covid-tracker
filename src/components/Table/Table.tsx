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
    <div className='flex flex-col justify-center items-center '>
      <table className='border-2 border-neutral-400 text-center text-neutral-400 p-5'>
        <thead>
          <tr>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Countries
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Deaths
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Recovered
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Cases
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Tests
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Cases Today
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Deaths Today
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Recovered Today
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Critical
            </td>
            <td className='border-2 border-neutral-400 font-bold text-center bg-white text-neutral-500 p-5'>
              Continent
            </td>
          </tr>
        </thead>
        <tbody>
          {countryData.map((data, i) => (
            <tr
              key={i}
              className='border-2 border-neutral-400 cursor-pointer text-white p-2'
              onClick={() => handleRowClick(data)}
            >
              <td>{data.name}</td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.deaths}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.recovered}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.cases}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.tests}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.todayCases}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.todayDeaths}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.todayRecovered}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
                {data.data && data.data.critical}
              </td>
              <td className='border-2 border-neutral-400 text-center text-white p-2'>
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
