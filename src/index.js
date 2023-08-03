import React from "react";
import  ReactDOM  from "react-dom/client";

// react router ia a standard library for routing in react . 
//it enables navigation between views from different components in a react application , allows the browser url to be 
// changed , and keeps the ui in sync with the url
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    
)