import styled from 'styled-components';
import { deviceQuery } from '../styles/breakpoints';
import { motion } from 'framer-motion';
import { scriptDetails } from '../data/introScript';
import { useState } from 'react';

const IntroductionSection = styled.section`
  width: 100%;
  padding-top: 90px;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media only screen and (${deviceQuery.tabletMax}) {
    gap: 0.3rem;
  }

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    flex-direction: column;
  }
`;

const StyledIntroductionText = styled.div`
  flex: 2;
  order: 3;
  text-align: left;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    display: none;
  }
`;
const StyledIntroductionTextItem = styled.div`
  margin-bottom: 10px;

  &.whisper {
    font-size: 0.8em;
    color: var(--color-text-secondary);
  }

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

const StyledBR = styled.div`
  display: flex;
  order: 2;
  width: 6px;
  height: calc(100% - 10px);
  margin: 0 20px;
  background-color: var(--color-text-secondary);

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    display: none;
  }
`;

const StyledH1 = styled.h1`
  flex: 4;
  order: 1;
  font-family: var(--font-family-accent);
  text-align: right;
  font-size: 14vw;
  line-height: 1em;
  font-weight: 900;
  margin: 0;
  margin-top: -20px;

  @media only screen and (${deviceQuery.tabletMax}) {
    flex: 3;
    display: flex;
    align-items: center;
  }

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    text-align: center;
    justify-content: center;
  }
`;

function Introduction() {
  return (
    <IntroductionSection>
      <StyledIntroductionText>
        {Object.keys(scriptDetails.script).map((oneKey, i) => {
          let delayVal = scriptDetails.delay * i + 1;
          return (
            <motion.div
              key={oneKey}
              animate={{ x: [0, 5, 5], opacity: [0, 1, 1] }}
              transition={{
                delay: delayVal,
                ease: 'anticipate',
                duration: 3,
                times: [0, 0.6, 1],
              }}
            >
              <StyledIntroductionTextItem
                className={`${i + 1 === 6 ? 'whisper' : ''}`}
              >
                {scriptDetails.script[i + 1]}
              </StyledIntroductionTextItem>
            </motion.div>
          );
        })}
      </StyledIntroductionText>

      <motion.div
        animate={{ x: [0, 5, 5], opacity: [0, 1, 1] }}
        style={{ order: '2' }}
        transition={{
          delay: 0.8,
          ease: 'anticipate',
          duration: 2,
          times: [0, 0.5, 1],
        }}
      >
        <StyledBR></StyledBR>
      </motion.div>

      <StyledH1>
        <motion.div
          animate={{ x: [0, 5, 5], opacity: [0, 1, 1] }}
          transition={{
            delay: 0.4,
            ease: 'anticipate',
            duration: 2,
            times: [0, 0.5, 1],
          }}
        >
          Corey Jenkins
        </motion.div>
      </StyledH1>
    </IntroductionSection>
  );
}

export default Introduction;
