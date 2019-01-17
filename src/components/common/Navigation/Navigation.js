import React from 'react';
import { NavLink } from "react-router-dom";
import { StyledNavigation } from './styledNavigation'
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'

const Navigation = () => (
    <StyledNavigation>
        <div className="Header__logo">
            <img src={PrimeLabsLogo} alt="PrimeLabs Logo" />
        </div>
        <div className="Header__navigation">
            <ul className="Header__navigation-list">
                <li className="Navigation__navigation-list-item">
                    <NavLink to={`/`} exact activeClassName="active">Home</NavLink>
                </li>
                <li className="Navigation__navigation-list-item">
                    <NavLink to={`/services`} activeClassName="active">Services</NavLink>
                </li>
                <li className="Navigation__navigation-list-item">
                    <NavLink to={`/case-studies`} exact activeClassName="active">Case Studies</NavLink>
                </li>
                <li className="Navigation__navigation-list-item">
                    <NavLink to={`/blockchain`} exact  activeClassName="active">Blockchain Infrastructure</NavLink>
                </li>
                <li className="Navigation__navigation-list-item">
                    <NavLink to={`/news`} exact activeClassName="active">News</NavLink>
                </li>
                <li className="Navigation__navigation-list-item">
                    <NavLink to={`/team`} exact activeClassName="active">Team</NavLink>
                </li>
            </ul>
        </div>
        <div className="Header__contacts">
        <button className="Header__contact-button">Contact us</button>
        </div>
    </StyledNavigation>
)

export default Navigation;