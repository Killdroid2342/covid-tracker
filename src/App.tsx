import React, { useState, useEffect } from 'react';
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table';

interface Data {
  continent: number;
  critical: number;
  todayRecovered: number;
  todayDeaths: number;
  todayCases: number;
  tests: number;
  deaths: number;
  recovered: number;
  cases: number;
}

export interface TCountryData {
  name: string;
  code: string;
  data?: Data;
}

const App: React.FC = () => {
  const [countryData, setCountryData] = useState<TCountryData[]>([]);
  const [selectedData, setSelectedData] = useState<TCountryData | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    let tempList: TCountryData[] = [];
    await fetch('https://disease.sh/v3/covid-19/countries')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((country: any) => {
          tempList.push({
            name: country.country,
            code: country.countryInfo.iso2,
            data: country,
          });
        });
        setCountryData(tempList);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCountryData = countryData.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='overflow-hidden h-full'>
      <h1 className='text-center text-white text-3xl font-bold mt-20'>
        Total Covid Cases
      </h1>
      <form action='' className='flex flex-col items-center mt-10 mb-10'>
        <input
          type='text'
          placeholder='Search country'
          className='text-center rounded-md p-2 font-bold'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {filteredCountryData.length === 0 ? (
        <div className='text-center text-white'>No countries found</div>
      ) : (
        <Table
          countryData={filteredCountryData}
          setIsModalOpen={setIsModalOpen}
          setSelectedData={setSelectedData}
        />
      )}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedData={selectedData}
      />
    </div>
  );
};

export default App;
