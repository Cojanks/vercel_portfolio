import { CategoryDefinitionsType, TagDefinitionsType } from '../types';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';

type CategoryListType = {
  categories: CategoryDefinitionsType[];
  tags: TagDefinitionsType;
};

const CategoryListContainer = styled.div`
  display: flex;
  max-width: 1200px;
`;
const CategoryListul = styled.ul`
  display: flex;
  list-style: none;
`;

// Category + desc
// Tags
// On tag select, open accordion with examples
function CategoryList({ categories, tags }: CategoryListType) {
  console.log(categories);
  console.log(tags);
  return (
    <CategoryListContainer>
      <CategoryListul>
        {categories.map((cat, i) => {
          return <CategoryListItem key={i} item={cat} />;
        })}
      </CategoryListul>
    </CategoryListContainer>
  );
}

export default CategoryList;
