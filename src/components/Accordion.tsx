import styled from 'styled-components';
import { SkillDetailsDBType } from '../types';
import AccordionItem from './AccordionItem';

const AccordionContainer = styled.ul`
  padding: 0;
  margin: 0;

  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

type AccordionType = {
  items: SkillDetailsDBType[];
};

function Accordion({ items }: AccordionType) {
  return (
    <AccordionContainer>
      {items.map((item, i) => {
        return <AccordionItem item={item} key={i}></AccordionItem>;
      })}
    </AccordionContainer>
  );
}

export default Accordion;

// type: opinion
// title: state
// description: server state is king
// additional link to article

// [type] [title]
// [description]
// [Additional Link: link desc, url]
