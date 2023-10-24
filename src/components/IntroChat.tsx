import { AnimatePresence, motion } from 'framer-motion';
import { chatScript } from '../data/introScript';
import { useState } from 'react';
import { deviceQuery } from '../styles/breakpoints';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 15px);
`;

const StyledIntroductionTextItem = styled.div`
  margin-bottom: 10px;

  &:before {
    content: '/>';
    position: absolute;
    left: -25px;
    color: var(--color-text-secondary);
  }

  @media only screen and (${deviceQuery.tabletMax}) {
    &:before {
      left: -16px;
      content: '>';
    }
  }
`;

function IntroChat({ animationComplete }: { animationComplete: () => void }) {
  const [scriptIndex, setscriptIndex] = useState<number>(1);

  function handleCompleteAnimation() {
    if (scriptIndex < Object.keys(chatScript.script).length) {
      setscriptIndex((state) => state + 1);
    } else {
      console.log('animation done!');
      animationComplete();
    }
  }
  return (
    <Container>
      <AnimatePresence initial={false}>
        <motion.div
          animate={{ x: [0, 5, 5, 0], opacity: [0, 1, 1, 0] }}
          transition={{
            delay: chatScript.delay,
            ease: 'anticipate',
            duration: 4,
            times: [0, 0.5, 0.85, 1],
          }}
          onAnimationComplete={() => {
            handleCompleteAnimation();
          }}
          key={scriptIndex}
        >
          <StyledIntroductionTextItem
            className={`${scriptIndex === 6 ? 'whisper' : ''}`}
          >
            {chatScript.script[scriptIndex]}
          </StyledIntroductionTextItem>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default IntroChat;
