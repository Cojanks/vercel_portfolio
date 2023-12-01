import { useState } from 'react';
import { SkillDetailsDBType } from '../types';
import styled from 'styled-components';
import { SVGIcon } from './Icons';
import { capitalizeWord } from '../utility';

const AccordionItemContainer = styled.div`
  padding: 10px 0 10px 20px;
  & + & {
    border-top: 1px solid var(--color-text-secondary);
  }
`;

const AccordionItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & svg {
    margin-right: 7px;
    padding-top: 2px;
  }
`;

const AccordionItemTag = styled.div`
  display: flex;
  color: var(--color-primary);
  font-weight: 600;
  padding: 7px 14px;
`;

const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 20px 20px;

  & a {
    display: block;
    margin-top: 10px;
  }
`;

type AccordionItemType = {
  item: SkillDetailsDBType;
};

function AccordionItem({ item }: AccordionItemType) {
  const [isOpen, setisOpen] = useState(true);

  return (
    <AccordionItemContainer>
      <AccordionItemHeader
        onClick={() => {
          setisOpen((state) => !state);
        }}
      >
        <span>
          <SVGIcon
            type={isOpen ? 'dcaret' : 'rcaret'}
            color="var(--color-text)"
            size="14"
          />
          {item.main}
        </span>
        {item.type && (
          <AccordionItemTag>[ {capitalizeWord(item.type)} ]</AccordionItemTag>
        )}
      </AccordionItemHeader>
      {isOpen && (
        <AccordionItemContent>
          <div>{item.description}</div>
          {item.link && item.link.length > 0 && (
            <a target="_blank" href={item.link[1]}>
              [ {item.link[0]} ]
            </a>
          )}
        </AccordionItemContent>
      )}
    </AccordionItemContainer>
  );
}

export default AccordionItem;
