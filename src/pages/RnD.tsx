import styled from 'styled-components';
import SocialPill from '../components/SocialPill';
import Tooltip from '../components/Tooltip';
import { useRef } from 'react';

const SectionContainer = styled.div`
  display: block;
  width: 100%;
  margin: 15px 25px 0px;
`;

const BoxRow = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  display: block;
  background-color: grey;
  border: 1px solid red;
  margin: 0 10px;
`;

function RnD() {
  const box1Ref = useRef<HTMLDivElement>(null);
  const box4Ref = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  function socialClick(socialIndex: number) {
    console.log(socialIndex);
  }
  return (
    <SectionContainer>
      <h2>Component Skunkworks Division</h2>
      <p>Beware, here be experiments.</p>
      <SocialPill
        handleSocialClick={(e: number) => {
          socialClick(e);
        }}
        handlePillClick={() => {
          console.log('pill clicked');
        }}
        socialVals={{ 1: 4, 2: 20 }}
      >
        Like me!
      </SocialPill>
      <BoxRow>
        <Box ref={box1Ref}></Box>
        <Tooltip targetEl={box1Ref}>Meep</Tooltip>
        <Box ref={box4Ref}></Box>
        <Tooltip targetEl={box4Ref} location="top">
          Meep meep meep meep meep meep meep
        </Tooltip>
        <p>
          If one examines precultural libertarianism, one is faced with a
          choice: either accept rationalism or conclude that context is a
          product of the masses, given that Marx’s essay on precultural
          libertarianism{' '}
          <a ref={linkRef} href="www.cojanks.io">
            Proletarian Propoganda
          </a>{' '}
          is invalid. The subject is contextualised into a precapitalist
          dematerialism that includes culture as a reality.
        </p>
        <Tooltip targetEl={linkRef} location="top">
          Please Visit!
        </Tooltip>
      </BoxRow>
    </SectionContainer>
  );
}

export default RnD;
