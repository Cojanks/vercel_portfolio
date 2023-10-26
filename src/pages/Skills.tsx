import { useQuery } from '@tanstack/react-query';
import CategoryList from '../components/CategoryList';
import { getAPICategories, getAPITags } from '../services/apiDefinitions';
import SpinnerOfDoom from '../components/SpinnerOfDoom';
import Error from './Error';
import { useSelector } from '../store/store';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: block;
  width: 100%;
  margin: 0 25px;
`;

function Skills() {
  const {
    isLoading: categoryLoading,
    data: categoriesData,
    error: categoryError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getAPICategories,
  });

  const { isLoading: tagLoading, error: tagError } = useQuery({
    queryKey: ['tags'],
    queryFn: getAPITags,
  });

  const tags = useSelector((state) => state.definitions.tags);

  if (categoryLoading || tagLoading) return <SpinnerOfDoom />;
  if (categoryError || tagError) return <Error />;

  return (
    <SectionContainer>
      <h2>Time to flex, eh?</h2>
      <p>Looking for skills? I got your skills</p>

      {categoriesData && (
        <CategoryList categories={categoriesData} tags={tags}></CategoryList>
      )}
    </SectionContainer>
  );
}

export default Skills;
