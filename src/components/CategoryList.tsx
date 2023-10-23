import { CategoryDBType, TagDefinitionsType } from '../types';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';

type CategoryListType = {
  categories: CategoryDBType[];
  tags: TagDefinitionsType;
};

const CategoryListContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
`;
const CategoryListul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  padding-left: 0;
`;

// Category + desc
// Tags
// On tag select, open accordion with examples
function CategoryList({ categories, tags }: CategoryListType) {
  return (
    <CategoryListContainer>
      <CategoryListul>
        {categories.map((cat, i) => {
          return <CategoryListItem key={i} item={cat} tags={tags} />;
        })}
      </CategoryListul>
    </CategoryListContainer>
  );
}

export default CategoryList;
