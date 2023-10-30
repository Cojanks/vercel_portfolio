import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';
import Button from './Button';

const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 15px;
  padding: 20px;
  border: 1px solid var(--color-text-secondary);
  background-color: transparent;
  border-radius: var(--border-radius-md);
  max-width: 700px;

  &.warning {
    border-color: var(--color-warning);
    background-color: var(--color-warning-background);
  }
  &.error {
  }
  &.success {
  }
  &.information {
  }
`;

const AlertContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const DismissibleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: -8px;
  margin-right: -8px;
`;

type AlertWarningType = {
  dismissible?: boolean;
  type?: 'warning' | 'error' | 'success' | 'information' | 'generic';
  handleClose?: () => void;
} & PropsWithChildren;

function Alert({
  children,
  dismissible = false,
  type = 'generic',
  handleClose,
}: AlertWarningType) {
  return (
    <>
      <AlertContainer className={type}>
        <AlertContentContainer>{children}</AlertContentContainer>

        {dismissible && handleClose && (
          <DismissibleContainer>
            <Button
              handleOnClick={(e: SyntheticEvent) => {
                e.stopPropagation();
                handleClose();
              }}
              shape="rounded"
              color={type}
              isIconButton={true}
            >
              <svg viewBox="0 0 24 24" width="1.1em" height="1.1em">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </Button>
          </DismissibleContainer>
        )}
      </AlertContainer>
    </>
  );
}

export default Alert;
