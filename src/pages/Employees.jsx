import React from 'react';
import { GridComponent, ColumnsDirective,ColumnDirective,Page,Search,Inject,Toolbar } from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const Employees = () => {
    const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl" style={{backgroundColor:currentMode === 'Dark' ? '#33373E' : '#fff'}}>
      <Header category ="Page" title="Employees"/>
      {/* creating the grid component to display fields and headers and data */}
      <GridComponent 
      dataSource={employeesData} 
      //allow paging creates pagination so that all order items doesnt display on one page for long scrolling but rather pages to page
      allowPaging
      allowSorting
      // enable this to bring the search box on the grid to search for elements// by importing Toolbar and injecting it
      toolbar={['Search']}
      width="auto">
        <ColumnsDirective>
        {employeesGrid.map((item,index)=>(
          // ColumnDirective reads the data from the orders grid set up// which
          // conntains an array of objects (fields and their properties)
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services= {[Search, Page,Toolbar ]}/>
      </GridComponent>
    </div>
  )
}

export default Employees
