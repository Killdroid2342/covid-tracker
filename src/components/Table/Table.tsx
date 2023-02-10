import React, { useEffect } from "react";
import { TCountryData } from "../../App";

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

  console.log("COUNTRY DATA", countryData);
  return (
    <div>
      <table>
        <tbody className="relative">
          <div className="border border-white overflow-auto h-[80vw]">
            <th className="text-white">Countries</th>
            <th className="text-white">Deaths</th>
            <th className="text-white">Recovered</th>
            <th className="text-white">Cases</th>
            <th className="text-white">Tests</th>
            <th className="text-white">Cases Today</th>
            <th className="text-white">Deaths Today</th>
            <th className="text-white">Recovered Today</th>
            <th className="text-white">Critical</th>
            <th className="text-white">Continent</th>
            {countryData.map((data, i) => (
              <tr key={i}>
                <td
                  className="border border-green-900 cursor-pointer text-white"
                  onClick={() => handleRowClick(data)}
                >
                  {data.name}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.deaths}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.recovered}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.cases}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.tests}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.todayCases}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.todayDeaths}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.todayRecovered}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.critical}
                </td>
                <td className="border border-green-900 text-white">
                  {data.data && data.data.continent}
                </td>
              </tr>
            ))}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
