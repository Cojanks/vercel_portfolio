import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

type CustomizationType = {
  $pillType: string;
  $color: string;
};

const PillTagContainer = styled.div<CustomizationType>`
  --use-color: ${(props) =>
    props.$color.length > 0
      ? props.$color
      : props.$pillType === 'primary'
      ? `var(--color-primary)`
      : `var(--color-secondary)`};

  padding: 8px 14px;
  display: inline-block;
  position: relative;
  border-radius: var(--border-radius-xlg);
  border: 2px solid transparent;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: var(--font-family-secondary);
  cursor: pointer;

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

const SocialButton = styled.button`
  cursor: pointer;
  border-radius: var(--border-radius-xlg);
  border: 2px solid var(--use-color);
  background-color: var(--color-background);
  color: var(--use-color);
  padding: 7px 12px 5px;

  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-text);
  }
`;

const SocialActionContainer = styled.div<CustomizationType>`
  --use-color: ${(props) =>
    props.$color.length > 0
      ? props.$color
      : props.$pillType === 'primary'
      ? `var(--color-primary)`
      : `var(--color-secondary)`};

  position: absolute;
  background-color: var(--color-background);
  border-radius: var(--border-radius-xlg);
  border: 2px solid var(--color-background);
  color: var(--use-color);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  ${SocialButton}:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  ${SocialButton}:last-child {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

type PillTagType = {
  type?: 'primary' | 'secondary';
  inverted?: boolean;
  color?: string;
  socialContent1?: string;
  socialContent2?: string;
  handleSocialClick: (buttonIndex: number) => void;
  handlePillClick: () => void;
} & PropsWithChildren;

function SocialPill({
  children,
  inverted = false,
  type = 'primary',
  socialContent1 = '👍',
  socialContent2 = '🔥',
  handleSocialClick,
  handlePillClick,
  color,
}: PillTagType) {
  const [showSocialActions, setshowSocialActions] = useState(false);

  return (
    <PillTagContainer
      $pillType={type}
      $color={color ? color : ''}
      className={`pill${inverted ? ' inverted' : ' filled'}`}
      onMouseEnter={() => {
        setshowSocialActions(true);
      }}
      onMouseLeave={() => {
        setshowSocialActions(false);
      }}
      onClick={() => {
        handlePillClick();
      }}
    >
      <div>{children}</div>
      {showSocialActions && (
        <SocialActionContainer $pillType={type} $color={color ? color : ''}>
          <SocialButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              handleSocialClick(1);
            }}
          >
            {socialContent1}
          </SocialButton>
          <SocialButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              handleSocialClick(2);
            }}
          >
            {socialContent2}
          </SocialButton>
        </SocialActionContainer>
      )}
    </PillTagContainer>
  );
}

export default SocialPill;
