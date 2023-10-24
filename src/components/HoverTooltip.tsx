import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

type HoverTooltipType = {
  content: string | React.ReactNode;
  position: 'top' | 'bottom';
} & PropsWithChildren;

const TooltipContainer = styled.div`
  padding: 10px 15px;
  position: absolute;
  border: 1px solid black;
  background-color: white;
  margin-top: 10px;
  border-radius: var(--border-radius-sm);
  width: 100%;
`;

const ChildrenSpan = styled.span`
  position: relative;
`;

function HoverTooltip({ children, content }: HoverTooltipType) {
  const [showTooltip, setshowTooltip] = useState(true);

  return (
    <>
      <ChildrenSpan
        onMouseEnter={() => {
          setshowTooltip(true);
        }}
        onMouseLeave={() => {
          setshowTooltip(false);
        }}
      >
        {children}
      </ChildrenSpan>
      {showTooltip && <TooltipContainer>{content}</TooltipContainer>}
    </>
  );
}

export default HoverTooltip;
