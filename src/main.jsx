import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";

import Home from "./Home/Home";
import Contact from "./navber/Contact";
import Blog from "./navber/Blog";
import Services from "./navber/Services";
import About from "./navber/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/contact',
      element:<Contact></Contact>
     },
     {
      path:'/blog',
      element:<Blog></Blog>
     },
     {
      path:'/services',
      element:<Services></Services>
     },
     {
      path:'/about',
      element:<About></About>
     },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);