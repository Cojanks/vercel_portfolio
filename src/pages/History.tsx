import Loader from '../components/Loader';
import Timeline from '../components/Timeline';
import Error from './Error';
import styled from 'styled-components';
import useFetchTimelineData from '../services/apiTimeline';
import Alert from '../components/Alert';
import { useState } from 'react';
import { getNumDaysSinceStart } from '../utility';
import Bottom from '../components/Bottom';

const SectionContainer = styled.div`
  display: block;
  width: 100%;
  margin: 15px 25px 0px;
`;

function History() {
  const [showAlert, setshowAlert] = useState(true);
  const { isLoading, error, data } = useFetchTimelineData();

  if (isLoading) return <Loader type="page" numBars={7} size={'chonk'} />;
  if (error) return <Error type="database" />;

  return (
    <SectionContainer>
      {showAlert && (
        <Alert
          dismissible={true}
          type="warning"
          handleClose={() => setshowAlert(false)}
        >
          <div>This page is being worked on!</div>
          <br />
          <div>
            Think about all the best features your users love and how long they
            took to implement.
          </div>
          <div>
            Great work takes time!{' '}
            <span className="whisper">{getNumDaysSinceStart()}</span>
          </div>
        </Alert>
      )}
      <h2>Work History</h2>
      {data && <Timeline eventList={data} />}
      <Bottom />
    </SectionContainer>
  );
}

export default History;
