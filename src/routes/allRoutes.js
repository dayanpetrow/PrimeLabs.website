import projectsRoutes from './projectsRoutes';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import TeamPage from '../pages/TeamPage';
import ContactsPage from '../pages/ContactsPage';
import CaseStudiesPage from '../pages/CaseStudiesPage'
import NotFoundPage from '../pages/NotFoundPage'
import BlockchainPage from '../pages/BlockchainPage';



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
    {
        pageTitle: "Meet the team",
        path: "/team",
        exact: true,
        page: TeamPage
    },
    {
        pageTitle: "Latest news",
        path: "/news",
        exact: true,
        page: NewsPage
    },
    {
        pageTitle: "Contact us",
        path: "/contacts",
        exact: true,
        page: ContactsPage
    },
    {
        pageTitle: "Blockchain Infrastructure",
        path: "/blockchain",
        exact: true,
        page: BlockchainPage
    },
    {
        pageTitle: "Case Studies",
        path: "/case-studies",
        exact: true,
        page: CaseStudiesPage
    },
    ...projectsRoutes, //project paths come from projectRoutes.js
    { //the not found page MUST always be last
        pageTitle: "Not found",
        path: "*",
        exact: false,
        page: NotFoundPage
    },
]