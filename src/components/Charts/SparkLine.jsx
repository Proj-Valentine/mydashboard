import React from 'react';
import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {

  return (
    <div>
      {/* sparkline is from synfusion, you import the graph component and use Inject to add/inject services into the comonent eg,tooltip, etc */}
      {/* each component has props eg id,datasource,fill etc, read more in sync fusion documentation */}
      <SparklineComponent
      id={id}
      width={width}
      height={height}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color:currentColor, width:2}}
      dataSource={data}
      xName="x"
      yName="yval" 
      type={type}
      // tooltipSettings adds tooltip effect to the line and its possible bacuse I am injecting SparkLinetooltip services
      tooltipSettings={{visible: true,
      format: '${x} : data ${yval}',
      trackLineSettings:{visible:true}}}>

         <Inject services={[SparklineTooltip]}/>

      </SparklineComponent>
     
    </div>
  )
}

export default SparkLine
