import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import './App.css';

const App = () => {
    const activeMenu = true;
  return (
    <div>
        <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style = {{zIndex:'1000'}}>
                <TooltipComponent content= "Settings" position="Top">
                    <botton type="button" 
                    className="text-3xl p-3 
                    hover:drop-shadow-xl
                    hover:bg-light-gray text-white"
                    style ={{background: 'blue',borderRadius:'50%'}}>
                        <FiSettings/>
                    </botton>
                </TooltipComponent>
            </div>
            {/* implement sidebar menu to appear and disappear when activeMenu is active ie true */}
            {activeMenu ? (<div className= "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"> 
            Sidebar</div>
            ):(
            <div className ="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>)
            }
            {/* for divs that share the same/similar class create a template litral to render different values on conditions
            I am creating a coditional logic to apply different classes to the div based on the value of activeMenu */}
            <div className= 
            { `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}` 
            }>
                <div className="fixed md:static
                 bg-main-bg dark:bg-main-dark-bg
                navbar w-full">
                     NAVBAR COMPONENTS
                     </div>
            </div>
            
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App
