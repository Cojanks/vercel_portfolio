import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { dispatch, useSelector } from '../store/store';
import { updateTagSocialByTagId } from '../store/slices/socialsSlice';
import { addAPISocialInteraction } from '../services/apiDefinitions';
import { useMutation } from '@tanstack/react-query';

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
  right: -7px;
  z-index: 2;

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
`;

type PillTagType = {
  type?: 'primary' | 'secondary';
  tagId?: number;
  inverted?: boolean;
  color?: string;
  socialContent1?: string;
  socialContent2?: string;
  socialVals: { [key: number]: number };
  handleSocialClick?: (socialInd: number) => void;
  handlePillClick?: () => void;
} & PropsWithChildren;

function SocialPill({
  children,
  inverted = false,
  type = 'primary',
  socialContent1 = '👍',
  socialContent2 = '🔥',
  handlePillClick,
  tagId = 10000,
  socialVals,
  color,
}: PillTagType) {
  const [showSocialActions, setshowSocialActions] = useState(false);
  const mutation = useMutation({
    mutationFn: addAPISocialInteraction,
  });
  const isAdmin = useSelector((state) => state.pageSettings.isAdmin);
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
        handlePillClick && handlePillClick();
      }}
    >
      <div>{children}</div>
      {!showSocialActions && (
        <SocialCountsContainer>
          {socialVals[1] > 0 && (
            <SocialCount>
              {socialContent1} {socialVals[1]}
            </SocialCount>
          )}

          {socialVals[2] > 0 && (
            <SocialCount>
              {socialContent2} {socialVals[2]}
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
              isAdmin && mutation.mutate({ tagId: tagId, socialAction: 1 });
            }}
          >
            {socialContent1}
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
              isAdmin && mutation.mutate({ tagId: tagId, socialAction: 2 });
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
