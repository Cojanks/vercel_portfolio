import { TagDefinitionsType } from '../types';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';
import { Database } from '../services/supabase';

type CategoryListType = {
  categories: Database['public']['Tables']['skill_categories']['Row'][];
  tags: TagDefinitionsType;
};
// TODO: remove optional above

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
`;

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
