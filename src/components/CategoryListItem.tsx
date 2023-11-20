import styled from 'styled-components';
import { TagDefinitionsType } from '../types';
import Card from './Card';
import { deviceQuery } from '../styles/breakpoints';
import SocialPill from './SocialPill';
import { Database } from '../services/supabase';
import { useSelector } from '../store/store';

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

const PillContainer = styled.div`
  display: flex;
  gap: 15px;
  row-gap: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

function CategoryListItem({
  item,
  tags,
}: {
  item: Database['public']['Tables']['skill_categories']['Row'];
  tags: TagDefinitionsType;
}) {
  function getTagSocialData(id: number) {
    return (
      useSelector((state) => state.tagSocials.tagSocialData[id]) || {
        1: 0,
        2: 0,
      }
    );
  }

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
          <PillContainer>
            {item.tag_ids &&
              item.tag_ids.map((id) => {
                return (
                  <SocialPill
                    key={id}
                    tagId={id}
                    handlePillClick={() => {
                      console.log('pill clicked');
                    }}
                    socialVals={getTagSocialData(id)}
                  >
                    {tags[id]}
                  </SocialPill>
                );
              })}
          </PillContainer>
        </Card>
      </ListItem_SectionContaier>
    </ListItem_Li>
  );
}

export default CategoryListItem;
