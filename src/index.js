import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aboutus from './page/Aboutus';
import Accueil from './page/Accueil';
import Actus from './page/Actus.js';
import Article from './page/Article';
import Equipes from './page/Equipes';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import Line_Up from './page/Line_Up';
import Joueur from './page/Joueur';

const router = createBrowserRouter([

  {
    path:"/",
    element: <Accueil/>,
  },
  
  {
    path:"/aboutus",
    element: <Aboutus/>,
  },

  {
    path: "/actus",
    element: <Actus/>,
  },

  {
    path: "/article",
    element: <Article/>,
  },
 
  {
    path:"/equipes",
    element: <Equipes/>,
  },
  {
    path:"/line_up/:jeu",
    element: <Line_Up/>,
  },
  {
    path:"/line_up/joueur/:pseudo",
    element: <Joueur/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
