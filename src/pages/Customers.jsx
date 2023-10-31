import React from 'react'
import { GridComponent, ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
          <Header category ="Page" title="Customers"/>
          {/* creating the grid component to display fields and headers and data */}
          <GridComponent 
          dataSource={customersData} 
          //allow paging creates pagination so that all order items doesnt display on one page for long scrolling but rather pages to page
          allowPaging
          allowSorting
          // enable this to bring the search box on the grid to search for elements// by importing Toolbar and injecting it
          toolbar={['Delete']}
          width="auto">
            <ColumnsDirective>
            {customersGrid.map((item,index)=>(
              // ColumnDirective reads the data from the orders grid set up// which
              // conntains an array of objects (fields and their properties)
              <ColumnDirective key={index} {...item}/>
            ))}
            </ColumnsDirective>
            <Inject services= {[Page,Toolbar ]}/>
          </GridComponent>
        </div>
      )
}

export default Customers
