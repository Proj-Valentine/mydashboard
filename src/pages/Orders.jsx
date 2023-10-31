import React from 'react';
import { GridComponent, ColumnsDirective,ColumnDirective,Resize, Sort, ContextMenu, Filter, Page,ExcelExport,PdfExport, Edit,Inject } from "@syncfusion/ej2-react-grids";
import { orderData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category ="Page" title="Orders"/>
      {/* creating the grid component to display fields and headers and data */}
      <GridComponent>
        <ColumnsDirective>
        {ordersGrid.map((item,index)=>(
          // ColumnDirective reads the data from the orders grid set up// which
          // conntains an array of objects (fields and their properties)
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}

export default Orders
