import CategoryList from '../components/CategoryList';
import useGetDefinitions from '../services/apiDefinitions';
import Error from './Error';
import { useSelector } from '../store/store';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import { getNumDaysSinceStart } from '../utility';
import { useState } from 'react';
import Bottom from '../components/Bottom';

const SectionContainer = styled.div`
  display: block;
  width: 100%;
  margin: 15px 25px 0px;
`;

function Skills() {
  const [showAlert, setshowAlert] = useState(true);

  const { isLoading, error, data: categoriesData } = useGetDefinitions();
  const tags = useSelector((state) => state.definitions.tags);

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

      <h2>Technical expertise</h2>
      <p>
        Looking for an engineer with a particular skillset? Let's see how I can
        assit your team.
      </p>

      {categoriesData && (
        <CategoryList categories={categoriesData} tags={tags}></CategoryList>
      )}
      <Bottom />
    </SectionContainer>
  );
}

export default Skills;
