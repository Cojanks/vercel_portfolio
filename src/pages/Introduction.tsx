import styled from 'styled-components';
import { deviceQuery, deviceSizeNum } from '../styles/breakpoints';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import IntroChat from '../components/IntroChat';
import { introSubtitles } from '../data/introScript';

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
    padding-top: 40px;
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
    margin-top: 15px;
    flex-direction: row;
    font-size: 1.2em;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const StyledMobileOnlyIntroduction = styled.div`
  display: none;
  font-size: 1.3em;
  font-weight: 300;

  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    display: block;
    text-align: center;
    margin: 25px 0;
  }
`;

const StyledSummeryContainer = styled.div`
  @media only screen and (${deviceQuery.mobileOnlyMax}) {
    display: flex;
  }
  @media only screen and (${deviceQuery.mobileTabletMin}) {
    width: calc(100% - 15px);
  }
`;
const StyledSummeryText = styled.div`
  @media only screen and (${deviceQuery.mobileTabletMin}) {
    margin-bottom: 10px;

    &.primary {
      font-size: 1.2em;
      font-weight: 400;
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
    order: revert;
    text-align: center;
    justify-content: center;
  }
`;

function Introduction() {
  const screenSize = useScreenSize();
  const [hasChatAnimationCompleted, sethasChatAnimationCompleted] =
    useState(false);

  return (
    <IntroductionSection>
      <StyledIntroductionText>
        {screenSize.width >= deviceSizeNum.mobileTabletMin &&
          !hasChatAnimationCompleted && (
            <IntroChat
              animationComplete={() => {
                sethasChatAnimationCompleted(true);
              }}
            />
          )}

        {hasChatAnimationCompleted && (
          <AnimatePresence>
            {Object.keys(introSubtitles).map((key, i) => {
              const delayVal = 0.5 * (i - 1) + 1;
              return (
                <StyledSummeryContainer key={i}>
                  <motion.div
                    key={`summary${key}`}
                    animate={{ x: [0, 5, 5], opacity: [0, 1, 1] }}
                    transition={{
                      delay: delayVal,
                      ease: 'anticipate',
                      duration: 3,
                      times: [0, 0.6, 1],
                    }}
                  >
                    <StyledSummeryText
                      className={i === 0 ? 'primary' : 'whisper'}
                    >
                      {introSubtitles[i + 1]}
                    </StyledSummeryText>
                  </motion.div>
                </StyledSummeryContainer>
              );
            })}
          </AnimatePresence>
        )}
      </StyledIntroductionText>

      {screenSize.width >= deviceSizeNum.mobileTabletMin && (
        <motion.div
          animate={{ x: [0, 5, 5], opacity: [0, 1, 1] }}
          style={{ order: '2' }}
          transition={{
            delay: 0.4,
            ease: 'anticipate',
            duration: 1,
            times: [0, 0.5, 1],
          }}
        >
          <StyledBR></StyledBR>
        </motion.div>
      )}

      <StyledMobileOnlyIntroduction>
        Hi. My name is
      </StyledMobileOnlyIntroduction>

      <StyledH1>
        <motion.div
          animate={{ x: [0, 5, 5], opacity: [0, 1, 1] }}
          transition={{
            delay: 0.2,
            ease: 'anticipate',
            duration: 1,
            times: [0, 0.5, 1],
          }}
        >
          Corey Jenkins
        </motion.div>
      </StyledH1>

      <StyledMobileOnlyIntroduction>
        &lt;&gt; I build <span className="primary">delightful</span> Front End
        experiences. &lt;/&gt;
      </StyledMobileOnlyIntroduction>
    </IntroductionSection>
  );
}

export default Introduction;
