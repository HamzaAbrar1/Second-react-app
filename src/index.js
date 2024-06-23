import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Something from "./Something";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import User from "./User";
import Home from "./Home";

import Contactus from "./Contactus";
import About from "./About";

import Layout from "./layout";

// import Checke from './checke';

// In order to create multiple routes first you have to wrap the entire section inside the createRoutesFromElements
// inside the react fragment in the same manner in which you add multiple elements in a single react component



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="appPart" element={<App />}/>
      
  

      {/* <Route path="user/:userid" element={<User />} /> */}

      {/* <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
    </Route>
<Route path="/something" element ={<Something />} ></Route>
<Route path="/user/:userId" element= {<User/>}></Route>


</>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
