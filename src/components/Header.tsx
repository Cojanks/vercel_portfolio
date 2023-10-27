import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { deviceQuery } from '../styles/breakpoints';
import { dispatch } from '../store/store';
import { logoClicked } from '../store/slices/easterEggsSlice';
import Hamburger from './Hamburger';
import { useState } from 'react';

const HeaderContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 12vw 10fr 12vw;
  grid-template-rows: calc(var(--nav-height) * 1px) auto;
  align-items: center;
  background-color: var(--color-background);
  z-index: 5;
  border-bottom: 1px solid var(--color-grey-800);

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    grid-template-columns: 10fr;
    grid-template-rows: calc(var(--nav-height-mobile) * 1px) auto;
    position: sticky;
    top: 0;
    border-color: var(--color-grey-700);
  }
  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    grid-template-columns: 10fr 2fr;
  }
`;

const LogoContainer = styled.div`
  grid-column: 1;
  font-weight: 500;
  font-size: 2em;
  text-align: center;
  cursor: pointer;

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    display: none;
  }
`;

const LogoText = styled.div`
  padding: 12px;
  border: 3px solid var(--color-text);
  display: inline;
  border-radius: 50%;
`;

const NavUl = styled.ul`
  grid-column: 2;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0;
  z-index: 3;

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    grid-column: 1;
  }

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    grid-column: 1;
    display: none;

    &.burger-open {
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--color-grey-700);
      margin-top: calc(var(--nav-height-mobile) * 1px);
      position: absolute;
      width: 100%;
      top: 0;
      background-color: var(--color-background);
    }
  }
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 0 25px;
  font-weight: 300;
  font-size: 1.3em;

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    margin: 0 15px;
    font-size: 1.1em;
  }

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    margin: 0 10px;
    flex: 1 1 auto;
  }

  ${NavUl}.burger-open & {
    height: 50px;
    background-color: var(--color-background);
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--color-grey-800);
  }
`;

const NavItemLink = styled(NavLink)`
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;
  position: relative;

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary);
    font-weight: 500;
  }

  &.active {
    &:before {
      content: '[';
      margin-right: 7px;
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      transform: translateX(20px);
    }

    &:after {
      content: ']';
      margin-left: 7px;
      -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
      -moz-transition: -moz-transform 0.3s, opacity 0.2s;
      transition: transform 0.3s, opacity 0.2s;
    }
  }

  ${NavUl}.burger-open & {
    width: 100%;
    padding: 15px 0;
  }
`;

const HamburgerContainer = styled.div`
  grid-column: 2;
`;

const MobileNavBackdrop = styled.div`
  background-color: black;
  opacity: 0;
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  margin-top: 81px;
  transition-timing-function: linear;
  transition-duration: 0.1s;
  transition-property: height, opacity;

  &.active {
    display: block;
    height: calc(100vh - ((var(--nav-height-mobile) + 2) * 1px));
    opacity: 0.8;
  }
`;

function Header() {
  const [didSomeoneOrderAnOpenSandwich, setDidSomeoneOrderAnOpenSandwich] =
    useState(false);

  function handleLogoClick() {
    dispatch(logoClicked());
  }

  function toggleMobileMenuState() {
    setDidSomeoneOrderAnOpenSandwich((state) => !state);
  }
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoText
          onClick={() => {
            handleLogoClick();
          }}
        >
          C J{' '}
        </LogoText>
      </LogoContainer>
      <NavUl
        role="navigation"
        className={didSomeoneOrderAnOpenSandwich ? 'burger-open' : ''}
      >
        <NavItem>
          <NavItemLink
            to={'/'}
            onClick={() => {
              setDidSomeoneOrderAnOpenSandwich(false);
            }}
          >
            Introduction
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink
            to="/skills"
            onClick={() => {
              setDidSomeoneOrderAnOpenSandwich(false);
            }}
          >
            Skills & Qualifications
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink
            to="/history"
            onClick={() => {
              setDidSomeoneOrderAnOpenSandwich(false);
            }}
          >
            History
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink
            to="/contact"
            onClick={() => {
              setDidSomeoneOrderAnOpenSandwich(false);
            }}
          >
            Contact
          </NavItemLink>
        </NavItem>
      </NavUl>
      <HamburgerContainer>
        <Hamburger
          didSomeoneOrderAnOpenSandwich={didSomeoneOrderAnOpenSandwich}
          handleHamburgerToggle={() => {
            toggleMobileMenuState();
          }}
        />
      </HamburgerContainer>

      <MobileNavBackdrop
        className={didSomeoneOrderAnOpenSandwich ? 'active' : ''}
        onClick={toggleMobileMenuState}
      />
    </HeaderContainer>
  );
}

export default Header;
