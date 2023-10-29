import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri'; 
import { MdKeyboardArrowDown } from 'react-icons/md';  
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import  avatar  from '../data/avatar.jpg';
import { Cart, Chat, Notifications, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider'; 
  
//implementing a navBar button component to use
const NavButton = ({title,customFunc,icon,color,dotColor}) => (
  <TooltipComponent content={title} position="BottomCenter">
    {/* when custfunc is defined at runtime so buttom can perform many functions depending on where its used */}
    <button type="button" onClick={customFunc} style={{ color }} 
    className="relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span style = {{background: dotColor}}
    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
      {/* render icons in it */}
      {icon}
    </span>
    </button>
  </TooltipComponent>
)


const Navbar = () => {
//retrieving the state objects from the statecontext
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext();

  // useEffect hook takes two parameters, a function and dependency array
  // useEffect(()=>{},[]) is used to apply an effect when a state event occurs et click,cancel etc like a side effect of a state
  useEffect(()=>{
    const handleResize = () => setScreenSize (window.innerWidth);
        //this is listening for a resize when window is opened and then call the handleResize function
    window.addEventListener('resize',handleResize);
    // intial call of handle resize to determine initial width of window
    handleResize();
    //in react whenever we call an event lister we have to remove it, so we return a recall function to remove eventlistener
    return () => window.removeEventListener ('resize',handleResize);
  },[])

  // creating anotheruseeffect to setActivemenu state whenever a state changes (ie screensize)
  // to hide menu depending on screen size eg mobile phoes
  useEffect((()=>{
    if(screenSize<=900){setActiveMenu(false)}
    else{setActiveMenu(true)}
  }),[screenSize])

  return (
    <div className= "flex justify-between p-2 md:mx-6 relative">
      {/* implementing Navbar */}
    {/* calling navButton created above */}
      <NavButton title="Menu" 
        customFunc={()=> setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
        color="blue" 
        icon={<AiOutlineMenu/>}/>
      <div className="flex">
        <NavButton title="Cart" 
          customFunc={()  => handleClick('cart')}
          color="blue" 
          icon={<FiShoppingCart/>}/>
        <NavButton title="Chat" 
          dotColor="#03C9D7"
          customFunc={()  => handleClick('chat')}
          color="blue" 
          icon={<BsChatLeft/>}/>
        <NavButton title="Notifications"
          dotColor="#03C9D7"         
          customFunc={()  => handleClick('notifications')}
          color="blue" 
          icon={<RiNotification3Line/>}/>
       <TooltipComponent
        content="Profile"
        position="BottomCenter">
          <div className= " flex items center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={()=> handleClick('userProfile')}>
            <img className= "rounded-full w-8 h-8"
            src={avatar}/>
            <p>
              <span className= "text-gray-400 text-14"> Hi, </span> {' '}
              <span className= "text-gray-400 font-bold ml-1 text-14"> Valentine </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"/>

          </div>

       </TooltipComponent>
       {/* if isClicked.cart then isClicked && means (if isClicked? then:else) render the <Chat/> component */}
       {/* note that isClicked is a state object getting it value set by the setisclicked from the useStatecontext */}
       {isClicked.cart && <Cart/>}
       {isClicked.chat && <Chat/>}
       {isClicked.notifications && <Notifications/>}
       {isClicked.userProfile && <UserProfile/>}
          
        
      </div>

    </div>
  )
}

export default Navbar
