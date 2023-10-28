import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider'


// hook your react application to the root of the index file
ReactDOM.render(
    // wrapping the App in the ContextProvider : > that we can use the value inside anywhere in the app
    // you have now call it in the App.js
<ContextProvider>
    <App />
</ContextProvider>, 
document.getElementById('root') );