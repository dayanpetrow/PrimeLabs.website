import React from 'react';
import { withRouter } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { StyledNavigation } from './styledNavigation'
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={'/services/white-label'}>White-label Exchange</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={'/services/blockchain-development'}>Blockchain Development</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={'/services/initial-token-offering'}>Initial Token Offering</Link>
      </Menu.Item>
    </Menu>
  );

const Navigation = (props) => {
    console.log(props);
    const servicesClass = (
        props.location.pathname === "/services/white-label" || 
        props.location.pathname === "/services/initial-token-offering" || 
        props.location.pathname === "/services/blockchain-development" 
        ) ? "Navigaton__link active" : "Navigaton__link";
    console.log(servicesClass)
    return (
        <StyledNavigation>
            <div id="NavigationWrapper">
                <div className="Navigation__container">
                    <div className="Header__logo">
                        <img src={PrimeLabsLogo} alt="PrimeLabs Logo" />
                    </div>
                    <div className="Header__navigation">
                        <ul className="Header__navigation-list">
                            <li className="Navigation__navigation-list-item">
                                <NavLink to={`/`} exact activeClassName="active" className="Navigaton__link">Home</NavLink>
                            </li>
                            <li className="Navigation__navigation-list-item">
                                <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
                                    <NavLink to={"#"} exact={false} className={servicesClass}>
                                        Services <Icon type="down" />
                                    </NavLink>
                                </Dropdown>
                            </li>
                            <li className="Navigation__navigation-list-item">
                                <NavLink to={`/case-studies`} exact activeClassName="active" className="Navigaton__link">Case Studies</NavLink>
                            </li>
                            <li className="Navigation__navigation-list-item">
                                <NavLink to={`/news`} exact activeClassName="active" className="Navigaton__link">News</NavLink>
                            </li>
                            <li className="Navigation__navigation-list-item">
                                <NavLink to={`/team`} exact activeClassName="active" className="Navigaton__link">Team</NavLink>
                            </li>
                            <li className="Navigation__navigation-list-item">
                                <NavLink to={`/contacts`} exact activeClassName="active" className="Navigaton__link">Contact us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="Header__contacts">
                        <button className="Header__contact-button" onClick={() => { props.history.push("/ready-to-talk")}}>Ready to talk</button>
                    </div>
                </div>
            </div>
        </StyledNavigation>
    )
}

export default withRouter(Navigation);