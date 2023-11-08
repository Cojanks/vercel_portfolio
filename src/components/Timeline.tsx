import styled from 'styled-components';
import { TimelineDBType } from '../types';
import { IconTypes, SVGIcon } from './Icons';
import { transformDate } from '../utility';

const TimelineContainer = styled.div`
  position: relative;
`;

const TimelineVisualLine = styled.div`
  position: absolute;
  left: 30px;
  top: 2px;
  bottom: 2px;
  width: 2px;
  background-color: var(--color-primary);
  border-radius: 1px;
`;

const TimelineContentContainer = styled.div``;

const TimelineUl = styled.ul`
  margin: 0 20px !important;
`;

const TimelineLi = styled.li`
  list-style: none;
  position: relative;
  border: 1px solid var(--color-text-secondary);
  border-radius: var(--border-radius-sm);
  margin-bottom: 20px;
  padding: 20px;
  background: var(--color-background);

  &:before {
    background-color: var(--color-background);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    position: absolute;
    left: -39px;
    top: 28px;
  }
`;

const TimelineBlockArrow = styled.span`
  background-color: var(--color-background);
  width: 14px;
  height: 14px;
  border: 1px solid var(--color-text-secondary);
  border-right: none;
  border-top: none;
  display: block;
  transform: rotate(45deg);
  position: absolute;
  left: -8px;
  top: 29px;
`;

function Timeline({ eventList }: { eventList: TimelineDBType[] }) {
  console.log(eventList);

  return (
    <TimelineContainer>
      <TimelineVisualLine />
      <TimelineContentContainer>
        <TimelineUl>
          {eventList.map((event, i) => {
            return (
              <TimelineLi key={i}>
                <TimelineBlockArrow />
                <div>{transformDate(event.startDate)}</div>
                <div>{event.company}</div>
                {event.contentList.map((content, ic) => {
                  let icontype = event.iconList[ic] as IconTypes;
                  return (
                    <div key={ic}>
                      <SVGIcon type={icontype} color={'var(--color-primary)'} />
                      {content}
                    </div>
                  );
                })}
              </TimelineLi>
            );
          })}
        </TimelineUl>
      </TimelineContentContainer>
    </TimelineContainer>
  );
}

export default Timeline;
