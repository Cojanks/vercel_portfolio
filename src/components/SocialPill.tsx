import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { dispatch, useSelector } from '../store/store';
import { updateTagSocialByTagId } from '../store/slices/socialsSlice';
import { SVGIcon } from './Icons';

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

  padding: 8px 14px 10px;
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

    &:hover {
      background-color: var(--color-background-light);
    }
  }

  &.filled {
    border-color: var(--use-color);
    background-color: var(--use-color);
    color: var(--color-background);

    &:hover {
      background-color: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    }
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
  right: -7px;
  z-index: 2;

  @keyframes grow {
    0% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  animation: grow 0.2s ease-in-out;

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
const SocialCountsContainer = styled.div`
  position: absolute;
  right: -7px;
  bottom: -13px;
  display: flex;
  flex-direction: row;
`;
const SocialCount = styled.div`
  background-color: var(--color-background);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-xlg);
  padding: 4px 6px;
  font-size: 12px;
  color: var(--color-primary);
  white-space: nowrap;

  .filled & {
    border-color: var(--color-primary);
    background-color: var(--color-background);
    color: var(--color-primary);
  }

  .inverted & {
    border-color: var(--color-background);
    background-color: var(--color-primary);
    color: var(--color-background);
  }
`;

type PillTagType = {
  type?: 'primary' | 'secondary';
  tagId?: number;
  inverted?: boolean;
  color?: string;
  socialContentArr?: string[];
  socialVals: { [key: number]: number };
  toggleable?: boolean;
  handleSocialClick?: (socialInd: number) => void;
  handlePillClick?: () => void;
} & PropsWithChildren;

function SocialPill({
  children,
  inverted = false,
  type = 'primary',
  socialContentArr = ['👍', '🔥'],
  handlePillClick,
  toggleable = false,
  tagId = 10000,
  socialVals,
  color,
}: PillTagType) {
  const [showSocialActions, setshowSocialActions] = useState(false);
  const [isInverted, setisInverted] = useState(inverted);
  const isLoading = useSelector((state) => state.tagSocials.isLoading);

  return (
    <PillTagContainer
      $pillType={type}
      $color={color ? color : ''}
      className={`pill${isInverted ? ' inverted' : ' filled'}`}
      onMouseEnter={() => {
        setshowSocialActions(true);
      }}
      onMouseLeave={() => {
        setshowSocialActions(false);
      }}
      onClick={() => {
        handlePillClick && handlePillClick();
        toggleable && setisInverted((state) => !state);
      }}
    >
      <div>{children}</div>
      {!showSocialActions && (
        <SocialCountsContainer>
          {isLoading && (
            <SocialCount>
              <SVGIcon
                size={'12'}
                type="dots"
                color={`${
                  inverted ? 'var(--color-background)' : 'var(--color-primary)'
                }`}
              />
            </SocialCount>
          )}

          {socialVals[1] > 0 && (
            <SocialCount>
              {socialContentArr[0]} {socialVals[1]}
            </SocialCount>
          )}

          {socialVals[2] > 0 && (
            <SocialCount>
              {socialContentArr[1]} {socialVals[2]}
            </SocialCount>
          )}
        </SocialCountsContainer>
      )}

      {showSocialActions && (
        <SocialActionContainer $pillType={type} $color={color ? color : ''}>
          <SocialButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              dispatch(
                updateTagSocialByTagId({
                  tagId: tagId,
                  socialCount: { ...socialVals, 1: socialVals[1] + 1 },
                })
              );
              console.log('Ooo, thanks for the interaction. +1 Charisma');
            }}
          >
            {socialContentArr[0]}
          </SocialButton>
          <SocialButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              dispatch(
                updateTagSocialByTagId({
                  tagId: tagId,
                  socialCount: { ...socialVals, 2: socialVals[2] + 1 },
                })
              );
              console.log('Ooo, thanks for the interaction. +1 Charisma');
            }}
          >
            {socialContentArr[1]}
          </SocialButton>
        </SocialActionContainer>
      )}
    </PillTagContainer>
  );
}

export default SocialPill;
