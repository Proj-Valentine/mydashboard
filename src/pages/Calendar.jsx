import React from 'react';
import { ScheduleComponent, ViewsDirective,ViewDirective,Day, Week,WorkWeek,Month,Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";


const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header 
      category="App"
      title="Calendar"/>
      <ScheduleComponent
      //add height to decrease page length
      height="650px"
      //to add events toagenda the calendar use  a data source
      eventSettings={{ dataSource:scheduleData}}
      // use this to set the starting dates, eg, in 2023 if i run this by dafault my sample data has no 2023 so it will return empty
      selectedDate={new Date (2021,0,10)}>
        <Inject services={[Day, Week,WorkWeek,Month,Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
