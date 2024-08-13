import Loader from '../components/Loader';
import Timeline from '../components/Timeline';
import Error from './Error';
import styled from 'styled-components';
import useFetchTimelineData from '../services/apiTimeline';
import Bottom from '../components/Bottom';
import { deviceQuery } from '../styles/breakpoints';

const SectionContainer = styled.div`
  display: block;
  width: 100%;
  margin: 15px 25px 0px;

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    margin: 15px 20px 0px;
  }
`;

function History() {
  const { isLoading, error, data } = useFetchTimelineData();

  if (isLoading) return <Loader type="page" numBars={7} size={'chonk'} />;
  if (error) return <Error type="database" />;

  return (
    <SectionContainer>
      <h2>Work History</h2>
      <p>
        From building full stack React applications to developing complicated UI
        components for financial-sector design systems, I have applied my skills
        to a myriad of projects and teams.
      </p>
      {data && <Timeline eventList={data} />}
      <Bottom />
    </SectionContainer>
  );
}

export default History;
