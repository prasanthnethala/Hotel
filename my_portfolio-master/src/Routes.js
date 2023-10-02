import React from 'react'
import App from './App';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';

const Routes = [
    {
        path: "/",
        element: <App />,
        children: [
            
          ],
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/project",
      element: <Project />,
    },
]

export default Routes;
