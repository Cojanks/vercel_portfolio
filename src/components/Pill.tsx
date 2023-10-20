import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type PillType = {
  type: 'button' | 'tag';
  inverted?: boolean;
} & PropsWithChildren;

const PillContainer = styled.div`
  padding: 5px;
`;

function Pill({ children, inverted = false, type }: PillType) {
  return (
    <PillContainer className={`pill${inverted ? ' inverted' : ''}`}>
      {children}
    </PillContainer>
  );
}

export default Pill;
