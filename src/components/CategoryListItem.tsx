import styled from 'styled-components';

const ListItemLi = styled.li`
  display: flex;
  flex-direction: row;
`;

const ListItemCategoryContaier = styled.div`
  display: flex;
  flex: 1;
`;

const ListItemTagsContaier = styled.div`
  display: flex;
  flex: 1;
`;

function CategoryListItem({ item }: any) {
  console.log(item);
  return (
    <ListItemLi>
      <ListItemCategoryContaier>category</ListItemCategoryContaier>
      <ListItemTagsContaier>tags</ListItemTagsContaier>
    </ListItemLi>
  );
}

export default CategoryListItem;
