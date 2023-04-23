//File that connects react application the DOM

import React from "react";
import ReactDOM  from "react-dom/client";
// because we are using the routes and route, in order to use them we must import the browser router
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
);