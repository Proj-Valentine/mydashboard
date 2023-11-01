import React from 'react'
// import sidebar modules to use
import { Link, NavLink  } from 'react-router-dom'; 
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md'; 
import { TooltipComponent } from "@syncfusion/ej2-react-popups";


import { links } from '../data/dummy'
// import useStateeffect and use it as a hook and change the old values hardcoded
// import { useStateContext } from '../contexts/ContextProvider'
// Adding a setter function to SET values
import { useStateContext } from '../contexts/ContextProvider'


const Sidebar = () => {
  // const activeMenu =true;
  const {activeMenu, setActiveMenu,screenSize,currentColor } = useStateContext();
  
  //creat a function to close menu menu is active and person changes the screensize
  // this function will replace the old expression for onClick for the  (onClick = {()=> setActiveMenu(false)} )
  const handleCloseSideBar = ()=> {
    if(activeMenu && screenSize <=900){setActiveMenu(false)}
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  


  return (
    <div className = " ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      { activeMenu && (<>
      <div className = "flex justify-between items-center">
        {/* setting active menu to false when sishopwareicon is clicked */}
        <Link to ="/" onClick = {handleCloseSideBar} 
        className = "items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"> 
        <SiShopware/><span>Mr Valentine</span>
        </Link>
        <TooltipComponent content="Menu" position="ButtomCenter">
          {/* onclick of button change menu to previous value  to toggle it on or off*/}
          <button type="button" onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
          className = "text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden" >
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>

      </div>
      <div className="mt-10">
        {/* links are in the data folder and is an array that contains javascript objects {Dasboard:{},pages:{[title: Ecommerce, icon: iconmae]} Apps{},charts{ title: icon} etc */}
        {links.map((item)=>(
          // creating div for each link element
          <div key = {item.title}>
            <p className= "text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </p>
            {item.links.map((link)=>(
              <NavLink
              to={`/${link.name}`}
              key={link.name}
              // handleclick hides menu on SMALL devices when a link to a page is clicked
              onClick={handleCloseSideBar}
              style={({isActive}) => ({backgroundColor: isActive ? currentColor:""})}
              className={({ isActive })=>(isActive? activeLink:normalLink)}>
                {link.icon}
                <span className="capitalize">
                  {link.name}
                </span>

              </NavLink>
            ))}
          </div>
        ))}

      </div>
      </>)}
    </div>
  )
}

export default Sidebar
