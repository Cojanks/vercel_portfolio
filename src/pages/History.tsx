import Loader from '../components/Loader';
import Timeline from '../components/Timeline';
import Error from './Error';
import useFetchData from '../hooks/useFetchData';
import styled from 'styled-components';

const StyledH1 = styled.h1``;

function History() {
  const { isLoading, error, data } = useFetchData('work_timeline');

  if (isLoading) return <Loader type="page" numBars={7} size={'chonk'} />;
  if (error) return <Error type="database" />;

  return (
    <div>
      <StyledH1>Work History</StyledH1>
      {data && <Timeline eventList={data} />}
    </div>
  );
}

export default History;
