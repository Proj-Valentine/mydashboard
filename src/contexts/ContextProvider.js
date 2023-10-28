import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// export const ContextProvider = ({children}) => {
//     return(
//         <StateContext.Provider
// value can be key:value pairs or just the name of the object if both key and value have the same name
//         value={{ test: 'test'}}>
//             {children}
//         </StateContext.Provider>)
// }

export const ContextProvider = ({children}) => {
    // add logic that the application depends on
    //setting initial state for active menu to true
    const [activeMenu, setActiveMenu] = useState(true);

    return(

        <StateContext.Provider
        // the state context provider passes the value of the state to its children (ie various component or wherever its used)
        value={{activeMenu}}>

            {children}
        </StateContext.Provider>)
}

// how can we use this active menu context inside a component? we have to export 
// by creating the useStateContext that returns a call to useContext(where we pass in the statecontext we want) after we import it in the index.js
export const useStateContext = () => useContext(StateContext)