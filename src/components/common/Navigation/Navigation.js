import React from 'react';
import { withRouter } from "react-router";
import { NavLink, Link } from "react-router-dom";
import { StyledNavigation } from './styledNavigation'
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'
import { Menu, Dropdown, Icon } from 'antd';
import { PrimeButton, buttonThemes } from '../../common/'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to={'/services/white-label-exchange'}>White Label Exchange</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to={'/services/blockchain-development'}>Blockchain Development</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={'/services/security-token-offering'}>Security Token Offering</Link>
      </Menu.Item>
    </Menu>
  );

const Navigation = (props) => {
    const servicesClass = (
        props.location.pathname === "/services/white-label-exchange" || 
        props.location.pathname === "/services/security-token-offering" || 
        props.location.pathname === "/services/blockchain-development" 
        ) ? "Navigaton__link active" : "Navigaton__link";
    return (
        <StyledNavigation>
            <div id="NavigationWrapper">
                <div className="Navigation__container">
                    <div className="Header__logo">
                        <Link to="/"><img src={PrimeLabsLogo} alt="PrimeLabs Logo" /></Link>
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
                        <PrimeButton 
                            theme={buttonThemes.navigationButton} 
                            onClick={() => { props.history.push("/ready-to-talk")}}
                            width={"160px"} 
                            >
                            Ready to talk
                        </PrimeButton>
                    </div>
                    <div className="Header__mobile-nav">
                        <PrimeButton 
                            theme={buttonThemes.navigationButton} 
                            onClick={props.open}
                            width={"60px"} 
                            >
                            <div className="HamburgerIcon">
                                <div className="HamburgerIcon__element"></div>
                                <div className="HamburgerIcon__element"></div>
                                <div className="HamburgerIcon__element"></div>
                            </div>
                        </PrimeButton>
                    </div>
                </div>
            </div>
        </StyledNavigation>
    )
}

export default withRouter(Navigation);