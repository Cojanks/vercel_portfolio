import styled from 'styled-components';

const IntroductionSection = styled.section`
  width: 100%;
  /* text-align: center; */
  padding-top: 90px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledIntroductionText = styled.div`
  flex: 1;
  text-align: right;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
`;

const StyledBR = styled.div`
  display: flex;
  width: 6px;
  height: 100%;
  margin: 0 20px 0 40px;
  background-color: var(--color-text-secondary);
`;

const StyledH1 = styled.h1`
  flex: 2;
  font-family: var(--font-family-accent);
  text-align: left;
  font-size: 10em;
  font-weight: 400;
  margin: 0;
  margin-top: -20px;
`;

function Introduction() {
  return (
    <IntroductionSection>
      <StyledIntroductionText>
        <div>Front End Developer</div>
      </StyledIntroductionText>
      <StyledBR></StyledBR>
      <StyledH1>Corey Jenkins</StyledH1>
    </IntroductionSection>
  );
}

export default Introduction;
