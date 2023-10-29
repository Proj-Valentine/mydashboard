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

    //creating new usestate to pass to Navbar icons
    //setting initial state value for isClicked to intitialState defined in the initial state object above
    const [isClicked,setIsClicked] = useState((initialState))
    

    //defining a function to update the value of initiatstate when clicked parameter is passed to it
    // after defining we pass it to the stateContext to be used by the children
    const handleClick = (clicked) => {
        // this below would have worked to set the value, if the intitial value set was a string but its an object ie initialState so we cant replace it with a string clicked
        //  setIsClicked (clicked);
        // so we spread intial state object and chage a value when isclicked is passed ie isclicked is set to true and passed to the item
        setIsClicked ({ ...initialState, [clicked]: true});
    }

    

    return(

        <StateContext.Provider
        // the state context provider passes the value of the state to its children (ie various component or wherever its used)
        //adding setActiveMenu to context values to dyamically update it
        // added handleclick to statecontext
        value={{activeMenu, setActiveMenu,
                isClicked,setIsClicked,
                handleClick}}
                >

            {children}
        </StateContext.Provider>)
}

// how can we use this active menu context inside a component? we have to export 
// by creating the useStateContext that returns a call to useContext(where we pass in the statecontext we want) after we import it in the index.js
export const useStateContext = () => useContext(StateContext)