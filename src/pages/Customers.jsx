import React from 'react'
import { GridComponent, ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

import { useStateContext } from '../contexts/ContextProvider';



const Customers = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl" style={{backgroundColor:currentMode === 'Dark' ? '#33373E' : '#fff'}}>
          <Header category ="Page" title="Customers"/>
          {/* creating the grid component to display fields and headers and data */}
          <GridComponent 
          dataSource={customersData} 
          //allow paging creates pagination so that all order items doesnt display on one page for long scrolling but rather pages to page
          allowPaging
          allowSorting
          // enable this to bring the search box on the grid to search for elements// by importing Toolbar and injecting it
          // YOU Can add other settings to perform CRUD operations , [Add, Edit,Delete]
          toolbar={['Delete']}
          // edit settings allows deleting and editing // also inject selection,edit etc services
          editSettings={{ allowDeleting:true,allowEditing:true}}
          width="auto">
            <ColumnsDirective>
            {customersGrid.map((item,index)=>(
              // ColumnDirective reads the data from the orders grid set up// which
              // conntains an array of objects (fields and their properties)
              <ColumnDirective key={index} {...item}/>
            ))}
            </ColumnsDirective>
            <Inject services= {[Page,Toolbar,Selection, Edit,Sort,Filter ]}/>
          </GridComponent>
        </div>
      )
}

export default Customers
