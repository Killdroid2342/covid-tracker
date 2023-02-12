import React from 'react';
import PieChart from './PieChart/PieChart';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedData: any;
}

const Modal = ({ isModalOpen, setIsModalOpen, selectedData }: Props) => {
  if (!isModalOpen) return null;
  return (
    <div className='backdrop-blur-sm w-screen h-screen fixed top-0 left-0 flex justify-center items-center'>
      <div className=' h-fit w-[540px] bg-slate-500 p-4 border-2 border-white rounded-lg relative'>
        <div className='text-center '>
          <p className='text-white font-bold text-2xl'>
            {selectedData ? selectedData.name : ''}
          </p>
          <div className=' flex flex-row justify-around py-2'>
            <div className='text-white border-2 bg-red-900 rounded-lg px-2'>
              <p className='font-bold'>Total Death</p>
              {selectedData ? selectedData.data.deaths : ''}
            </div>
            <div className='text-white border-2 bg-green-900 rounded-lg px-2'>
              <p className='font-bold'>Total Recovered</p>
              {selectedData ? selectedData.data.recovered : ''}
            </div>
            <div className='text-white border-2 bg-yellow-400 rounded-lg px-2'>
              <p className='font-bold'>Total Cases</p>
              {selectedData ? selectedData.data.cases : ''}
            </div>
          </div>
          <PieChart total={selectedData && selectedData.data} />
          <button
            onClick={() => setIsModalOpen(false)}
            className='text-black font-extrabold text-2xl absolute top-2 right-2'
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
