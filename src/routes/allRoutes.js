import React from 'react';
import HomePage from '../pages/HomePage';
import projectsRoutes from './projectsRoutes';

/* 
    A config object with all routes within the website
    route object: {
        pageTitle: "page title (displayed on the browser tab)",
        path: --page-url--,
        exact: true (should remain true for static pages), 
        page: (the component page to be displayed for the above path)
    }
*/

export default [
    {
        pageTitle: "Home",
        path: "/",
        exact: true,
        page: HomePage
    },
    ...projectsRoutes, //project paths come from projectRoutes.js
    { //the not found page MUST always be last
        pageTitle: "Not found",
        path: "*",
        exact: false,
        page: () => (<div><h1>Page not found</h1></div>)
    },
]