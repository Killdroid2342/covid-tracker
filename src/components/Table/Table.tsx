import React, { useEffect } from 'react';
import { TCountryData } from '../../App';

interface Props {
  setIsModalOpen: any;
  countryData: TCountryData[];
}

const Table = ({ setIsModalOpen, countryData }: Props) => {
  const handleRowClick = (data: TCountryData) => {
    setIsModalOpen(true);
  };

  console.log('COUNTRY DATA', countryData);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Cases</th>
          </tr>
          {countryData.map((data) => (
            <tr>
              <td
                className='border border-green-900 cursor-pointer text-white'
                onClick={() => handleRowClick(data)}
              >
                {data.name}
              </td>
              <td className='border border-green-900'>
                {data.data && data.data.deaths}
              </td>
              <td className='border border-green-900'>
                {data.data && data.data.recovered}
              </td>
              <td className='border border-green-900'>
                {data.data && data.data.cases}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;