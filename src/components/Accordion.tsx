import styled from 'styled-components';
import { SkillDetailsDBType } from '../types';
import AccordionItem from './AccordionItem';

const AccordionContainer = styled.div`
  padding: 0;
  margin: 10px 0 10px 0;
  width: 100%;

  &.active {
    border-top: 1px solid var(--color-text-secondary);
    border-bottom: 1px solid var(--color-text-secondary);
  }
`;

type AccordionType = {
  items: SkillDetailsDBType[];
};

function Accordion({ items }: AccordionType) {
  return (
    <AccordionContainer className={items.length > 0 ? 'active' : ''}>
      {items.length > 0 &&
        items.map((item, i) => {
          return <AccordionItem item={item} key={i}></AccordionItem>;
        })}
    </AccordionContainer>
  );
}

export default Accordion;
