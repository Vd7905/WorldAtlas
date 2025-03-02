import React from 'react'
import "./App.css"
import AppLayout from "./components/Layout/AppLayout"
import Country from './pages/Country'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import CountryDetails from './components/Layout/CountryDetails'


const router = createBrowserRouter([

  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/country",
        element:<Country/>,
      },
      {
        path:"country/:id",
        element:<CountryDetails/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }  
 
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
