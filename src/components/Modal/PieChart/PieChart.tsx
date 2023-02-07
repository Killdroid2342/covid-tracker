import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const PieChart = ({ total }: any) => {
  return (
    <div className='text-white border-2 border-white rounded-md h-96'>
      <VictoryPie
        data={[
          { x: 'Deaths', y: total?.deaths },
          { x: 'Cases', y: total?.cases },
          { x: 'Recovered', y: total?.recovered },
        ]}
        colorScale={['red', 'yellow', 'green']}
        labelComponent={<VictoryLabel style={{ fill: 'white' }} />}
      />
    </div>
  );
};

export default PieChart;
