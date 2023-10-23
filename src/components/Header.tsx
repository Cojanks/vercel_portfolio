import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 5vw 2fr 10fr 2fr 5vw;
  grid-template-rows: 140px auto;
  align-items: center;
`;

const LogoContainer = styled.div`
  grid-column: 2;
  font-weight: 500;
  font-size: 2em;

  @media (max-width: 1000px) {
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
  grid-column: 3;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavItem = styled.li`
  display: flex;
  margin: 0 25px;
  font-weight: 300;
  font-size: 1.3em;
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

const HamburgerContainer = styled.div`
  grid-column: 4;
  justify-self: end;

  @media (min-width: 768px) {
    display: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoText>C J </LogoText>
      </LogoContainer>
      <NavUl>
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
      <HamburgerContainer>Hamburger</HamburgerContainer>
    </HeaderContainer>
  );
}

export default Header;
