import styled from 'styled-components';
import { CategoryDBType, TagDefinitionsType } from '../types';
import Card from './Card';
import PillTag from './PillTag';
import { deviceQuery } from '../styles/breakpoints';

const ListItem_Li = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 55px;
  gap: 40px;

  @media only screen and (${deviceQuery.tabletMax}) {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 75px;
  }
`;

const ListItem_SectionContaier = styled.div`
  flex: 1;
  flex-wrap: wrap;
`;

const ListItemLi_H3 = styled.h3`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 7px;
  font-weight: 500;
`;

const ListItemLi_p = styled.p`
  margin-top: 0px;
  color: var(--color-text-secondary);
`;

const PillCOntainer = styled.div`
  display: flex;
  gap: 7px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

function CategoryListItem({
  item,
  tags,
}: {
  item: CategoryDBType;
  tags: TagDefinitionsType;
}) {
  return (
    <ListItem_Li>
      <ListItem_SectionContaier>
        <ListItemLi_H3>{item.name}</ListItemLi_H3>
        <ListItemLi_p>{item.description}</ListItemLi_p>
      </ListItem_SectionContaier>
      <ListItem_SectionContaier>
        <Card
          borderColor="var(--color-secondary)"
          padding="25px"
          boxShadow="0px 0 10px var(--color-secondary)"
        >
          <PillCOntainer>
            {item.tag_ids.map((id) => {
              return (
                <PillTag key={id} type="primary" inverted={false}>
                  {tags[id]}
                </PillTag>
              );
            })}
          </PillCOntainer>
        </Card>
      </ListItem_SectionContaier>
    </ListItem_Li>
  );
}

export default CategoryListItem;
