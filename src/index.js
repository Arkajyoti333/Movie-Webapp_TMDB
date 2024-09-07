import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import Root from './Root/Root';
import HomeScreen from './Components/HomeScreen/homeScreen';



const route=createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<HomeScreen/>
      },

      {
        path:"*",
        element:<div className=' text-center mt-40 mb-5'>page not found !</div>
      }
    ]
  }
])







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

