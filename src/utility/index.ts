export function getNumDaysSinceStart() {
  const StartDate = new Date('10/17/2023');
  const today = new Date();
  const daysDiff =
    (today.getTime() - StartDate.getTime()) / (1000 * 60 * 60 * 24);
  const truncated = Math.trunc(daysDiff);
  const sprintNum = Math.floor(daysDiff / 7);

  if (parseInt((daysDiff + '').split('')[2]) >= 5) {
    return `I started this ${truncated}, almost ${
      truncated + 1
    }, days ago. So, only ${sprintNum} sprint${sprintNum > 1 ? 's' : ''}. `;
  } else {
    return ` I started this around ${truncated} days ago. So, only ${sprintNum} sprint${
      sprintNum > 1 ? 's' : ''
    }. `;
  }
}
