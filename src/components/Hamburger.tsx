import styled from 'styled-components';
import { deviceQuery } from '../styles/breakpoints';
import { useEffect, useState } from 'react';

const HamburgerContainer = styled.button`
  font: inherit;
  position: relative;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;

  @media only screen and (${deviceQuery.mobileTabletMin}) {
    display: none;
  }
`;

const Outer = styled.div`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 24px;
`;
const Inner = styled.div`
  display: block;
  margin-top: -2px;
  top: 4px;
  position: absolute;
  width: 30px;
  height: 2px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
  background-color: var(--color-text-secondary);

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    background-color: var(--color-text-secondary);
  }

  &:before {
    top: 10px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform, opacity;
  }
  &:after {
    top: 20px;
    bottom: -10px;
  }

  ${HamburgerContainer}.the-ham-is-active ${Outer} & {
    transform: translate3d(0, 10px, 0) rotate(45deg);

    &:before {
      transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
      opacity: 0;
    }

    &:after {
      transform: translate3d(0, -20px, 0) rotate(-90deg);
    }
  }
`;

function Hamburger({
  handleHamburgerToggle,
}: {
  handleHamburgerToggle: () => void;
}) {
  const [toggled, setToggled] = useState(false);

  return (
    <HamburgerContainer
      className={toggled ? 'the-ham-is-active' : ''}
      onClick={() => {
        setToggled((state) => !state);
        handleHamburgerToggle();
      }}
    >
      <Outer>
        <Inner></Inner>
      </Outer>
    </HamburgerContainer>
  );
}

export default Hamburger;
