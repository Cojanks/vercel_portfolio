import CategoryList from '../components/CategoryList';
import useGetSkillsData from '../services/apiDefinitions';
import Error from './Error';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Bottom from '../components/Bottom';
import { deviceQuery } from '../styles/breakpoints';

const SectionContainer = styled.section`
  display: block;
  width: 100%;
  margin: 15px 25px 0px;

  @media only screen and (${deviceQuery.mobileTabletMax}) {
    margin: 15px 20px 0px;
  }
`;

function Skills() {
  const { isLoading, error, data: categoriesData } = useGetSkillsData();

  if (isLoading) return <Loader type="page" numBars={7} size={'chonk'} />;
  if (error) return <Error type="database" />;

  return (
    <SectionContainer>
      <h2>Technical expertise</h2>
      <p>
        Looking for an engineer with a particular skillset? Let's see how I can
        assit your team.
      </p>

      {categoriesData && (
        <CategoryList categories={categoriesData}></CategoryList>
      )}
      <Bottom />
    </SectionContainer>
  );
}

export default Skills;
