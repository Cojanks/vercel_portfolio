import { useState } from 'react';
import { SkillDetailsDBType } from '../types';
import styled from 'styled-components';
import { SVGIcon } from './Icons';

const AccordionItemContainer = styled.div`
  padding: 10px 0;
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
  background-color: var(--color-primary);
  padding: 7px 14px;
  border-radius: var(--border-radius-xlg);
`;

const AccordionItemContent = styled.div`
  display: flex;
  padding: 10px 0 20px 20px;
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
          [{item.type}] {item.main}
        </span>
        <AccordionItemTag>Tag here</AccordionItemTag>
      </AccordionItemHeader>
      {isOpen && (
        <AccordionItemContent>
          <div>{item.description}</div>
          {item.link && (
            <a target="_blank" href={item.link[1]}>
              {item.link[0]}
            </a>
          )}
        </AccordionItemContent>
      )}
    </AccordionItemContainer>
  );
}

export default AccordionItem;
