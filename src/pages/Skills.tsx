import { useQuery } from '@tanstack/react-query';
import CategoryList from '../components/CategoryList';
import { getAPICategories, getAPITags } from '../services/apiDefinitions';
import SpinnerOfDoom from '../components/SpinnerOfDoom';
import Error from './Error';

function Skills() {
  const {
    isLoading: categoryLoading,
    data: categoriesData,
    error: categoryError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getAPICategories,
  });

  const {
    isLoading: tagLoading,
    data: tagData,
    error: tagError,
  } = useQuery({ queryKey: ['tags'], queryFn: getAPITags });

  // console.log(categoriesData);
  // console.log(tagData);

  if (categoryLoading || tagLoading) return <SpinnerOfDoom />;
  if (categoryError || tagError) return <Error />;
  return (
    <div>
      <h2>Time to flex, eh?</h2>
      <p>Looking for skills? I got your skills</p>

      {categoriesData && (
        <CategoryList categories={categoriesData} tags={tagData}></CategoryList>
      )}
    </div>
  );
}

export default Skills;
