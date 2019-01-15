import React from 'react';
import { NavLink } from "react-router-dom";
import { StyledNavigation } from './styledNavigation'

const NavLinks = [
    {to: "/", key: "home", title: "Home"},
    {to: "/case-studies", key: "case-studies", title: "Case studies"},
    {to: "/", key: "news", title: "Services"},
    {to: "/team", key: "team", title: "Team"},
    {to: "/blockchain", key: "blockchain", title: "Blockchain Infrastructure"},
    {to: "/contacts", key: "contacts", title: "Contact us"},
]

const Navigation = () => (
    <StyledNavigation>
        {
            NavLinks.map(link => (
                <NavLink
                    to={link.to}
                    exact
                    activeClassName="active"
                    className="navbar-link"
                    key={link.key}
                >
                    {link.title}
                </NavLink>
            ))
        }
    </StyledNavigation>
)

export default Navigation;