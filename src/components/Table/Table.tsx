import React from 'react';

const Table = ({ setIsModalOpen, fetchData, total }: any) => {
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
            <td className='border border-green-900'>Deaths{total?.cases}</td>
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
    </div>
  );
};

export default Table;
