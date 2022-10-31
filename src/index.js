import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';



const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/ass",
    element: 'Ass...'
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


