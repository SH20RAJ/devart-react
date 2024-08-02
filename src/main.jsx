/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Post from './components/Post.jsx';
import UserPage from './components/UserPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <div>About : github@sh20raj</div>,
  },
  {
    path : "contact",
    element: <div>Contact : sh20raj@gmail.com</div>

  },
  {
    path: ":userId/:id",
    element: <Post />,
  },
  {
    path: ":userId",
    element: <UserPage/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>,
)
