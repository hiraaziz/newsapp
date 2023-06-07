import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UkNews from './components/ukNews/UkNews';
import UsaNews from './components/usaNews/UsaNews';
import NewsDetail from './components/singlenews/NewsDetail';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
 
    children: [
      {
        path: "/uknews",
        element: <UkNews/>
      },
      {
        path: "/usanews",
        element: <UsaNews/>
      },
     
      {
        path: "/newsdetail/:id",
        element:<NewsDetail/>
      },
   
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);
