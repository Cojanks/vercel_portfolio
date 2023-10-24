import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type PillTagType = {
  type: 'primary' | 'secondary';
  inverted?: boolean;
  color?: string;
} & PropsWithChildren;

const PillTagContainer = styled.div<{
  $pillType: string;
  $color: string;
}>`
  --use-color: ${(props) =>
    props.$color.length > 0
      ? props.$color
      : props.$pillType === 'primary'
      ? `var(--color-primary)`
      : `var(--color-secondary)`};

  padding: 8px 14px;
  display: inline-block;
  border-radius: var(--border-radius-xlg);
  border: 2px solid transparent;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: var(--font-family-secondary);

  &.inverted {
    border-color: var(--use-color);
    background-color: transparent;
    color: var(--use-color);
  }

  &.filled {
    border-color: var(--use-color);
    background-color: var(--use-color);
    color: var(--color-background);
  }
`;

function PillTag({
  children,
  inverted = false,
  type = 'primary',
  color,
}: PillTagType) {
  return (
    <PillTagContainer
      $pillType={type}
      $color={color ? color : ''}
      className={`pill${inverted ? ' inverted' : ' filled'}`}
    >
      {children}
    </PillTagContainer>
  );
}

export default PillTag;
