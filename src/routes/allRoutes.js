import projectsRoutes from './projectsRoutes';
import servicesRoutes from './servicesRoutes';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import TeamPage from '../pages/TeamPage';
import ContactsPage from '../pages/ContactsPage';
import CaseStudiesPage from '../pages/CaseStudiesPage'
import ReadyToTalk from '../pages/ReadyToTalkPage'
import NotFoundPage from '../pages/NotFoundPage'

/* A config object with all routes within the website */
export default [
    { path: "/", page: HomePage },
    { path: "/team", page: TeamPage },
    { path: "/news", page: NewsPage },
    { path: "/contacts", page: ContactsPage },
    { path: "/case-studies", page: CaseStudiesPage },
    { path: "/ready-to-talk", page: ReadyToTalk },

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