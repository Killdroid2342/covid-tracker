import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table';

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
      <Table
        total={total}
        setIsModalOpen={setIsModalOpen}
        fetchData={fetchData}
      />
      <Modal
        isModalOpen={isModalOpen}
        total={total}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default App;
