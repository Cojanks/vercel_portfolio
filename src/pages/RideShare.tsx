import { motion } from 'framer-motion';
import styled from 'styled-components';
// https://idletimer.dev/

const ContainerDiv = styled.main`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 200px;
`;
const GreetingsDiv = styled.div`
  display: flex;
  flex: 1 1 50%;
`;
const PersonalDiv = styled.div`
  display: flex;
  flex: 1 1 50%;
`;
const DetailsDiv = styled.div`
  display: flex;
  width: 100%;
`;

const GreetingText = styled.h2`
  font-family: var(--font-family-accent);
  font-weight: 100;
  font-size: 6vw;
  margin: 0;
`;

function RideShare() {
  return (
    <ContainerDiv>
      <GreetingsDiv>
        <motion.div
          animate={{ x: [-5, 0, 0], opacity: [0, 1, 1] }}
          transition={{
            ease: 'anticipate',
            duration: 2,
          }}
        >
          <GreetingText>Hi there! </GreetingText>
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 20, 0],
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.6,
            repeat: Infinity,
          }}
        >
          <GreetingText>👋</GreetingText>
        </motion.div>
      </GreetingsDiv>
      <PersonalDiv>
        intro information
        {/* <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9f328e190679663.65becfcf41423.gif"
          alt="gif"
        /> */}
      </PersonalDiv>
      <DetailsDiv>details</DetailsDiv>
    </ContainerDiv>
  );
}

export default RideShare;
