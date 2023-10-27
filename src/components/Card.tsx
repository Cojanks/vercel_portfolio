import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type CardType = {
  bgColor?: string;
  borderColor?: string;
  padding?: string;
  boxShadow?: string;
} & PropsWithChildren;

type CardContainerType = {
  $bgColor?: string;
  $borderColor?: string;
  $padding?: string;
  $boxShadow?: string;
};

const CardContainer = styled.div<CardContainerType>`
  border-radius: var(--border-radius-md);

  padding: ${(props) => (props.$padding ? props.$padding : '7px')};

  background-color: ${(props) =>
    props.$bgColor ? props.$bgColor : 'transparent'};

  border: ${(props) =>
    props.$borderColor ? '1px solid ' + props.$borderColor : 'none'};
  box-shadow: ${(props) => (props.$boxShadow ? props.$boxShadow : 'none')};
`;

function Card({
  padding,
  bgColor,
  borderColor,
  boxShadow,
  children,
}: CardType) {
  return (
    <CardContainer
      $padding={padding}
      $borderColor={borderColor}
      $bgColor={bgColor}
      $boxShadow={boxShadow}
    >
      {children}
    </CardContainer>
  );
}

export default Card;
