import styled, { keyframes } from 'styled-components';

const LoaderContainerFill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &.viewport {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &.page {
    height: 100%;
    flex: 1;
    flex-direction: column;
    margin-top: calc(50vh - 141px);
  }
`;

const LoaderContainer = styled.div<{ $numBars: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.$numBars * 16 + 'px'};
  position: relative;

  ${LoaderContainerFill} & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.$numBars * 16 + 'px'};
    position: relative;
    height: 100%;
  }
`;

const GrowFrames = keyframes`
  0%{transform: scaleY(1);
        opacity: 0.2;}
  50%{transform: scaleY(1.5);
        opacity: 1;}
  100%{transform: scaleY(1);
        opacity: 0.2;}
`;

const Bar = styled.div<BarPropsType>`
  width: ${(props) => props.$size + 'px'};
  height: 50px;
  background-color: ${(props) => props.$color};
  animation: ${GrowFrames} 1s infinite;
  opacity: 0.2;
  margin: 0 2px;

  &:nth-child(1) {
    animation-delay: ${(props) => props.$speed * 1 + 's'};
  }
  &:nth-child(2) {
    animation-delay: ${(props) => props.$speed * 2 + 's'};
  }
  &:nth-child(3) {
    animation-delay: ${(props) => props.$speed * 3 + 's'};
  }
  &:nth-child(4) {
    animation-delay: ${(props) => props.$speed * 4 + 's'};
  }
  &:nth-child(5) {
    animation-delay: ${(props) => props.$speed * 5 + 's'};
  }
  &:nth-child(6) {
    animation-delay: ${(props) => props.$speed * 6 + 's'};
  }
  &:nth-child(7) {
    animation-delay: ${(props) => props.$speed * 7 + 's'};
  }
`;

type LoaderType = {
  type?: 'fit' | 'inline' | 'page' | 'viewport';
  color?: string;
  numBars: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  speed?: number;
  size?: 'chonk' | 'medium' | 'smol';
};

type BarPropsType = {
  $color: string;
  $speed: number;
  $size: number;
};

function Content({
  color = 'var(--color-primary)',
  numBars,
  speed = 0.1,
  size,
}: LoaderType) {
  const sizeNum = size === 'medium' ? 7 : size === 'chonk' ? 14 : 4;
  return (
    <>
      <LoaderContainer className="loader" $numBars={numBars}>
        {Array.from({ length: numBars }, (_, i) => (
          <Bar
            key={i}
            $speed={speed}
            $color={color}
            $size={sizeNum}
            className="bar"
          ></Bar>
        ))}
      </LoaderContainer>
    </>
  );
}

function Loader({
  type = 'fit',
  color,
  numBars = 5,
  speed = 0.1,
  size = 'medium',
}: LoaderType) {
  return (
    <>
      {type === 'fit' || type === 'page' || type === 'viewport' ? (
        <LoaderContainerFill className={type}>
          <Content numBars={numBars} size={size} color={color} speed={speed} />
        </LoaderContainerFill>
      ) : (
        <Content numBars={numBars} size={size} color={color} speed={speed} />
      )}
    </>
  );
}

export default Loader;
