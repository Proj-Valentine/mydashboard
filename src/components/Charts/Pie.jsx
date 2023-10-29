import React from 'react';
import {ChartComponent,SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries,Tooltip } from '@syncfusion/ej2-react-charts';

// importing dummy data from data folder
import { StackedCustomServices, stackedPrimaryXAxis, stackedPrimaryYAxis} from '../../data/dummy';

const Stacked = ({width,height}) => {
  return (
    <div>
      {/* sync fusion chart component inside the chart compnent add props and define the services you need */}
      <ChartComponent
      width={width}
      height={height}
      id="stack chart"
      // primaryXAxis={stackedPrimaryXAxis}
      // primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border:{width:0}}}
      >
        <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}/>
      </ChartComponent>
    </div>
  )
}

export default Stacked
