import About from "../../Component/About/About";
import Contact from "../../Component/Contact/Contact";
import Home from "../../Component/Home/Home";
import News from "../../Component/News/News";
import Shop from "../../Component/Shop/Shop";
import LayOut from "../LayOut/LayOut";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/news",
          element: <News></News>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
      ]
    },
  ]);
  

export default [router, RouterProvider];