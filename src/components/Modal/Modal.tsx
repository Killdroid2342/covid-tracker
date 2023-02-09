import React from 'react';
import PieChart from './PieChart/PieChart';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedData: any;
}

const Modal = ({ isModalOpen, setIsModalOpen, selectedData }: Props) => {
  return (
    <div>
      {isModalOpen && (
        <div className='modal'>
          <div className='text-center border-2 border-white'>
            <div className='border-2 border-white flex flex-row'>
              <div className='text-white border-2 border-red-900'>
                <p>Total Death</p>
                {selectedData ? selectedData.data.deaths : ''}
              </div>
              <div className='text-white border-2 border-green-900'>
                <p>Total Recovered</p>
                {selectedData ? selectedData.data.recovered : ''}
              </div>
              <div className='text-white border-2 border-yellow-400'>
                <p>Total Cases</p>
                {selectedData ? selectedData.data.cases : ''}
              </div>
            </div>
            <PieChart total={selectedData && selectedData.data} />
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
  );
};

export default Modal;
