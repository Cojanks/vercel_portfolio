import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = {
  handleOnClick: (e: SyntheticEvent) => void;
  inverted?: boolean;
  isIconButton?: boolean;
  shape?: 'rounded' | 'pill';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'generic'
    | 'information';
} & PropsWithChildren;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  background-color: var(--color-background);
  border: 1px solid var(--color-text-secondary);
  color: var(--color-text-secondary);
  cursor: pointer;

  &.rounded {
    border-radius: var(--border-radius-sm);
  }
  &.pill {
    border-radius: var(--border-radius-xlg);
  }

  &.icon {
    padding: 5px;
    border-radius: 50%;

    & svg {
      display: block;
    }
  }

  &.color-primary {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-background);

    &.inverted {
      background-color: var(--color-background);
      color: var(--color-primary);
    }
  }
  &.color-secondary {
    border-color: var(--color-secondary);
    background-color: var(--color-secondary);
    color: var(--color-text);

    &.inverted {
      background-color: var(--color-background);
      color: var(--color-secondary);
    }
  }
  &.color-warning {
    border-color: var(--color-warning);
    background-color: var(--color-warning);
    color: var(--color-background);

    &.inverted {
      background-color: var(--color-background);
      color: var(--color-warning);
    }

    &:hover {
      filter: brightness(120%);
    }
  }
`;

function Button({
  children,
  shape = 'rounded',
  inverted = false,
  color = 'primary',
  isIconButton = false,
  handleOnClick,
}: ButtonType) {
  function getClassNames() {
    return `${shape}${inverted ? ' inverted' : ''}${' color-' + color}${
      inverted ? ' inverted' : ''
    }${isIconButton ? ' icon' : ''}`;
  }
  return (
    <StyledButton onClick={handleOnClick} className={getClassNames()}>
      {children}
    </StyledButton>
  );
}

export default Button;
