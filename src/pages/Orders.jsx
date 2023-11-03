import React from 'react';
import { GridComponent, ColumnsDirective,ColumnDirective,Resize, Sort, ContextMenu, Filter, Page,ExcelExport,PdfExport, Edit,Inject } from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Orders = () => {
   const { currentMode } = useStateContext();
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl" style={{backgroundColor:currentMode === 'Dark' ? '#33373E' : '#fff'}}>
      <Header category ="Page" title="Orders" style={{color:currentMode === 'Dark' ? '#FFFFFF' : '#fff'}}/>
      {/* creating the grid component to display fields and headers and data */}
      <GridComponent 
      id="gridcomp" 
      dataSource={ordersData} 
      //allow paging creates pagination so that all order items doesnt display on one page for long scrolling but rather pages to page
      allowPaging
      allowSorting
      >
        <ColumnsDirective >
        {ordersGrid.map((item,index)=>(
          // ColumnDirective reads the data from the orders grid set up// which
          // conntains an array of objects (fields and their properties)
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services= {[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders
