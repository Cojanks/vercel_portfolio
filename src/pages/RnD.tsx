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
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: grey;
  border: 1px solid red;
  margin: 0 10px;
`;

function RnD() {
  const boxRef = useRef<HTMLDivElement>(null);

  function socialClick(socialIndex: number) {
    console.log(socialIndex);
  }
  return (
    <div>
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
        >
          Like me!
        </SocialPill>
        <BoxRow>
          <Box ref={boxRef}></Box>
          <Tooltip targetEl={boxRef}>I am a tooltip I am a to</Tooltip>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </BoxRow>
      </SectionContainer>
    </div>
  );
}

export default RnD;
