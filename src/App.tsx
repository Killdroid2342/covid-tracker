import React, { useState, useEffect } from 'react';
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table';

interface Data {
  deaths: number;
  recovered: number;
  cases: number;
}

export interface TCountryData {
  name: string;
  code: string;
  data?: Data;
}

const countries: TCountryData[] = [
  { name: 'WorldWide', code: 'all' },
  { name: 'UK', code: 'gb' },
  { name: 'USA', code: 'us' },
];

const App: React.FC = () => {
  const [countryData, setCountryData] = useState<TCountryData[]>(countries);
  const [selectedData, setSelectedData] = useState<TCountryData | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (country: TCountryData[]) => {
    let tempList: TCountryData[] = [];
    countries.forEach(async (country, i) => {
      let url = `https://disease.sh/v3/covid-19/countries/${country.name}`;
      if (country.code == 'all') {
        url = `https://disease.sh/v3/covid-19/${country.code}`;
      }
      const data = await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          country.data = data;
          return country;
        });

      tempList.push(data);
      if (i == countries.length) {
        setCountryData(tempList);
      }
    });
  };

  useEffect(() => {
    fetchData(countries);
  }, []);

  return (
    <>
      <h1 className='text-center text-white'>Total Covid Cases</h1>
      <Table
        countryData={countryData}
        setIsModalOpen={setIsModalOpen}
        setSelectedData={setSelectedData}
      />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedData={selectedData}
      />
    </>
  );
};

export default App;
