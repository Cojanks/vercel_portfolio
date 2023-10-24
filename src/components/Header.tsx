import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { deviceQuery } from '../styles/breakpoints';
import { dispatch } from '../store/store';
import { logoClicked } from '../store/slices/easterEggsSlice';

const HeaderContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 12vw 10fr 12vw;
  grid-template-rows: 140px auto;
  align-items: center;
  background-color: var(--color-background);

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    grid-template-columns: 10fr;
    grid-template-rows: 80px auto;
    position: sticky;
    top: 0;
    border-bottom: 1px solid var(--color-grey-700);
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

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    grid-column: 1;
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
`;

const NavItemLink = styled(NavLink)`
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;
  position: relative;

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
`;

function Header() {
  function handleLogoClick() {
    dispatch(logoClicked());
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
      <NavUl role="navigation">
        <NavItem>
          <NavItemLink to={'/'}>Introduction</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/skills">Skills & Qualifications</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/history">History</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/contact">Contact</NavItemLink>
        </NavItem>
      </NavUl>
    </HeaderContainer>
  );
}

export default Header;
