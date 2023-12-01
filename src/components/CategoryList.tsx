import { CategoriesDBType } from '../types';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';

type CategoryListType = {
  categories: CategoriesDBType[];
};

const CategoryListContainer = styled.div`
  display: flex;
  max-width: 1400px;
  width: 100%;
`;
const CategoryListul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  padding-left: 0;
  margin-top: 50px;
`;

function CategoryList({ categories }: CategoryListType) {
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
