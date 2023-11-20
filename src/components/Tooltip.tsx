import { PropsWithChildren, RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTooltip } from '../hooks/useTooltip';

type TooltipContainerType = {
  $top: number;
  $left: number;
  $location: 'top' | 'bottom';
};

const TooltipContainer = styled.div<TooltipContainerType>`
  position: absolute;
  left: ${(props) => (props.$left ? props.$left + 'px' : '0px')};
  top: ${(props) => props.$top + 'px'};
  padding: 10px 13px;
  background-color: var(--color-secondary);
  opacity: 0;
  transition: opacity 0.3s ease-in;
  border-radius: var(--border-radius-sm);

  &.visible {
    opacity: 1;
  }

  &:before,
  &:after {
    content: '';
    background-color: var(--color-secondary);
    width: 14px;
    height: 14px;
    border: 1px solid var(--color-secondary);
    display: block;
    transform: rotate(45deg);
    position: absolute;
    left: calc(50% - 8px);
    top: -8px;
    border-right: none;
    border-bottom: none;
  }

  &:before {
    content: ${(props) => (props.$location === 'bottom' ? ' ' : 'unset')};
  }

  &:after {
    content: ${(props) => (props.$location === 'top' ? ' ' : 'unset')};
    top: unset;
    bottom: -8px;
    border-left: none;
    border-top: none;
  }
`;
const TooltipContentContainer = styled.div``;

type TooltipType = {
  targetEl: RefObject<HTMLElement>;
  offset?: number;
  location?: 'top' | 'bottom';
} & PropsWithChildren;

function Tooltip({
  targetEl,
  children,
  offset = 18,
  location = 'bottom',
}: TooltipType) {
  const tooltipElRef = useRef<HTMLDivElement>(null);

  const { position, isVisible, onMouseEnter, onMouseLeave } = useTooltip({
    targetElRef: targetEl,
    tooltipElRef,
    tooltipLocation: location,
    offset,
  });

  useEffect(() => {
    const element = targetEl?.current;

    if (element) {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [targetEl, onMouseEnter, onMouseLeave]);

  // if (!isVisible) {
  //   return;
  // }

  return (
    <TooltipContainer
      $top={position.top}
      $left={position.left}
      $location={location}
      className={isVisible ? 'visible' : ''}
      ref={tooltipElRef}
    >
      <TooltipContentContainer>{children}</TooltipContentContainer>
    </TooltipContainer>
  );
}

export default Tooltip;
