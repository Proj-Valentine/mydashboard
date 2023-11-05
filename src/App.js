import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import components from pages and components
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Line, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { IconContext } from "react-icons";

//importing the useTstaecontext
import { useStateContext } from './contexts/ContextProvider'


import './App.css';

const App = () => {
    // Replacing this hardcoded value with a dynamic context  state value and calling it as a hook
    // const activeMenu = true;
    const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode,setCurrentColor,setCurrentMode} = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
        setCurrentColor(currentThemeColor);
        setCurrentMode(currentThemeMode);
        }
    }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark':''}>
        <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-10" style = {{zIndex:'1000'}}>
                <TooltipComponent content= "Settings" position="Top">
                    <botton type="button" 
                    className="text-xl p-3 
                    hover:drop-shadow-xl
                    hover:bg-light-gray text-white"
                    // style ={{background: currentColor,borderRadius:'100%'}}
                    style ={{borderRadius:'100%'}}
                    // Adding functionality to settings to bring back the theme settings sidebar to set our themes after we close it
                    onClick={()=> setThemeSettings(true)}>
                        <IconContext.Provider value={{ color: currentMode==='Dark' ? '':'black' , className: "global-class-name" }}>
                            <FiSettings/>
                        </IconContext.Provider>
                    </botton>
                </TooltipComponent>
            </div>
            {/* implement sidebar menu to appear and disappear when activeMenu is active ie true */}
            {activeMenu ? (<div className= "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"> 
            <Sidebar/></div>
            ):(
            <div className ="w-0 dark:bg-secondary-dark-bg"><Sidebar/></div>)
            }
            {/* for divs that share the same/similar class create a template litral to render different values on conditions
            I am creating a coditional logic to apply differ{<nt classes to the div based on the value of activeMenu */}
            <div className= 
            { `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72':'flex-2'}` 
            }>
                <div className="fixed md:static
                 bg-main-bg dark:bg-main-dark-bg
                navbar w-full">
                     <Navbar/>
                     </div>
           
                <div >
                    {/* adding a dynamic code block to render if themesettings state changes, in this case if its true, default is false */}
               { themeSettings && <ThemeSettings />}
                    {/* Routes allows us to rout the page to the element prop value which can be another page */}
                <Routes>   
                    {/* dashboard pages */}
                    <Route path="/" element={<Ecommerce/>} />
                    <Route path="/ecommerce" element={<Ecommerce/>} />

                    {/* pages routes */}
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/employees" element={<Employees/>} />
                    <Route path="/customers" element={<Customers/>} />

                    {/* Apps */}
                    <Route path="/kanban" element={<Kanban/>} />
                    <Route path="/editor" element={<Editor/>} />
                    <Route path="/calendar" element={<Calendar/>} />
                    <Route path="/color-picker" element={<ColorPicker/>} />

                    {/* Charts */}
                    <Route path="/line" element={<Line/>} />
                    <Route path="/area" element={<Area/>} />
                    <Route path="/bar" element={<Bar/>} />
                    <Route path="/pie" element={<Pie/>} />
                    <Route path="/financial" element={<Financial/>} />
                    <Route path="/color-mapping" element={<ColorMapping/>} /> 
                    <Route path="/pyramid" element={<Pyramid/>} />
                    <Route path="/stacked" element={<Stacked/>} />                    
                </Routes>
                </div>
                <Footer/> 
             </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App
