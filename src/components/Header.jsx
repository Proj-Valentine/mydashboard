import React from 'react';
import { useStateContext } from '../contexts/ContextProvider'; 


const Header = ({ category, title }) => {
  const { currentMode } = useStateContext();

  return (
    <div className ="mb-10">
      <p className = 'text-gray-400'  style={{color:currentMode === 'Dark' ? '#FFFFFF' : '#A0AEC0'}}>
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900"  style={{color:currentMode === 'Dark' ? '#FFFFFF' : '#1a202c'}}>
        {title}
      </p>
    </div>
  )
}

export default Header
