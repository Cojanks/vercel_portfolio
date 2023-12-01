import styled from 'styled-components';
import { IconTypes, SVGIcon } from './Icons';
import { transformDate } from '../utility';
import { TimelineDBType } from '../types';

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin-top: 30px;
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
  font-weight: 300;
  letter-spacing: 0.2px;
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
  top: 23px;
`;

const TimelineLi = styled.li`
  list-style: none;
  position: relative;
  border: 1px solid var(--color-text-secondary);
  border-radius: var(--border-radius-md);
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
    top: 23px;
  }

  &:hover {
    border-color: var(--color-secondary);
    background-color: var(--color-primary-background);

    &:before {
      background-color: var(--color-primary);
    }

    & ${TimelineBlockArrow} {
      border-color: var(--color-secondary);
    }
  }
`;

const TimelineCompany = styled.div`
  color: var(--color-primary);
  font-weight: 400;
  margin: 5px 0 15px;
`;

const TimelineContent = styled.div`
  margin-top: 25px;
`;

const TimelineContentLi = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  margin-bottom: 15px;
  line-height: 1.2em;
  margin-left: 20px;

  svg {
    flex: 1 0 auto;
    margin-top: 3px;
  }
`;

const TimelineContentExtra = styled.div`
  position: relative;
  margin: 35px 0;
  text-align: center;
  border: 1px solid var(--color-grey-700);
  border-radius: var(--border-radius-sm);
  padding: 10px;
  background-color: var(--color-background);

  &:before {
    background-color: var(--color-background);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    position: absolute;
    left: -59px;
    top: calc(50% - 10px);
  }

  > ${TimelineBlockArrow} {
    left: -29px;
    top: calc(50% - 9px);
  }
`;

const TimelineStartDate = styled.div`
  position: relative;
  margin-top: 30px;
  &:before {
    background-color: var(--color-background);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    position: absolute;
    left: -59px;
    top: 3px;
  }

  > ${TimelineBlockArrow} {
    left: -29px;
    top: 3px;
  }
`;

const TimelinePosition = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: var(--color-primary);
  color: var(--color-background);
  border-radius: var(--border-radius-sm);
  font-weight: 500;
`;

function Timeline({ eventList }: { eventList: TimelineDBType[] }) {
  return (
    <TimelineContainer>
      <TimelineVisualLine />
      <TimelineContentContainer>
        <TimelineUl>
          {eventList.map((event, i) => {
            return (
              <TimelineLi key={i}>
                <TimelineBlockArrow />
                <div>{transformDate(event.endDate!)}</div>
                <TimelineCompany>{event.company}</TimelineCompany>
                <TimelinePosition>{event.position}</TimelinePosition>
                <TimelineContent>
                  {event.contentList!.map((content, ic) => {
                    const icontype = event.iconList![ic] as IconTypes;
                    return (
                      <TimelineContentLi key={ic}>
                        <SVGIcon
                          type={icontype}
                          color={'var(--color-primary)'}
                          size="20"
                        />
                        <span>{content}</span>
                      </TimelineContentLi>
                    );
                  })}
                </TimelineContent>
                {event.extraEvent && (
                  <TimelineContentExtra>
                    <TimelineBlockArrow />
                    <div>{event.extraEvent.title}</div>
                    <div>{event.extraEvent.details}</div>
                  </TimelineContentExtra>
                )}

                <TimelineStartDate>
                  <TimelineBlockArrow />
                  {transformDate(event.startDate!)}

                  {event.startingDetails && <div>{event.startingDetails}</div>}
                </TimelineStartDate>
              </TimelineLi>
            );
          })}
        </TimelineUl>
      </TimelineContentContainer>
    </TimelineContainer>
  );
}

export default Timeline;
