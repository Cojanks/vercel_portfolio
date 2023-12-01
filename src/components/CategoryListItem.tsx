import styled from 'styled-components';
import { CategoriesDBType } from '../types';
import Card from './Card';
import { deviceQuery } from '../styles/breakpoints';
import SocialPill from './SocialPill';
import { useSelector } from '../store/store';
import Accordion from './Accordion';
import { useState } from 'react';

const ListItem_Li = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 55px;
  column-gap: 40px;
  flex-wrap: wrap;

  @media only screen and (${deviceQuery.tabletMax}) {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 75px;
    flex-wrap: nowrap;
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

const ShowAccordionHint = styled.div`
  margin-top: 30px;
  color: var(--color-text-secondary);
`;

function getSocialContentIcons(id: number) {
  if (id === 30) return ['🐶', '🥺'];
  if (id === 27) return ['📚', '📖'];
  if (id === 15) return ['✍️', '✅'];
  return ['👍', '🔥'];
}

function getTagSocialData(id: number) {
  return (
    useSelector((state) => state.tagSocials.tagSocialData[id]) || {
      1: 0,
      2: 0,
    }
  );
}

function CategoryListItem({ item }: { item: CategoriesDBType }) {
  const [activeCatTags, setactiveCatTags] = useState<number[]>([]);

  function handleTagChange(id: number) {
    if (!activeCatTags.includes(id)) {
      setactiveCatTags((state) => [...state, id]);
    } else {
      setactiveCatTags((state) => state.filter((newId) => newId !== id));
    }
  }

  function buildAccordionList() {
    const details = useSelector((state) => state.definitions.details);
    const tags = useSelector((state) => state.definitions.tags);
    let skillDetailIds: number[] = [];

    for (const tagId of activeCatTags) {
      skillDetailIds = skillDetailIds.concat(tags[tagId].detail_ids);
    }

    return [...new Set(skillDetailIds)].map((detailId) => details[detailId]);
    // Removes duplicates *and* returns an array of detail objects.
  }

  return (
    <ListItem_Li>
      <ListItem_SectionContaier>
        <ListItemLi_H3>{item.name}</ListItemLi_H3>
        <ListItemLi_p>{item.description}</ListItemLi_p>
        <ShowAccordionHint>
          Click any of the skills to view examples or musings on these subjects.
        </ShowAccordionHint>
        <Accordion items={buildAccordionList()} />
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
                    toggleable={true}
                    inverted={!activeCatTags.includes(id)}
                    socialVals={getTagSocialData(id)}
                    socialContentArr={getSocialContentIcons(id)}
                    handlePillClick={() => {
                      handleTagChange(id);
                    }}
                  >
                    {useSelector((state) => state.definitions.tags[id].name)}
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
