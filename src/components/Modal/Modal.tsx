import React from 'react';
import PieChart from './PieChart/PieChart';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const Modal = ({ isModalOpen, setIsModalOpen }: Props) => {
  return (
    <div>
      {isModalOpen && (
        <div className='modal'>
          <div className='text-center border-2 border-white'>
            <div className='border-2 border-white flex flex-row'>
              <div className='text-white border-2 border-red-900'>
                <p>Total Death</p>
                {/* {total ? total.deaths : ''} */}
              </div>
              <div className='text-white border-2 border-green-900'>
                <p>Total Recovered</p>
                {/* {total ? total.recovered : ''} */}
              </div>
              <div className='text-white border-2 border-yellow-400'>
                <p>Total Cases</p>
                {/* {total ? total.cases : ''} */}
              </div>
            </div>
            <PieChart total={{}} />
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