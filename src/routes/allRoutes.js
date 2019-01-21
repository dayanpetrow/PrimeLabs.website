import projectsRoutes from './projectsRoutes';
import servicesRoutes from './servicesRoutes';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import TeamPage from '../pages/TeamPage';
import ContactsPage from '../pages/ContactsPage';
import CaseStudiesPage from '../pages/CaseStudiesPage'
import NotFoundPage from '../pages/NotFoundPage'
import BlockchainPage from '../pages/BlockchainPage';

/* A config object with all routes within the website */
export default [
    { path: "/", page: HomePage },
    { path: "/team", page: TeamPage },
    { path: "/news", page: NewsPage },
    { path: "/contacts", page: ContactsPage },
    { path: "/blockchain", page: BlockchainPage },
    { path: "/case-studies", page: CaseStudiesPage },

    /* 
        just for separation of concerns
    */
    ...projectsRoutes, 
    ...servicesRoutes,

    /* the 404 page MUST always be listed last with exact: false */
    { 
        path: "*",
        exact: false,
        page: NotFoundPage
    },
]