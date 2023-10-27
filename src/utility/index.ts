export function getNumDaysSinceStart() {
  const StartDate = new Date('10/17/2023');
  const today = new Date();
  const daysDiff =
    (today.getTime() - StartDate.getTime()) / (1000 * 60 * 60 * 24);
  const truncated = Math.trunc(daysDiff);

  if (parseInt((daysDiff + '').split('')[2]) >= 5) {
    return `( I've only been working on this for ${truncated}, almost ${
      truncated + 1
    }, days. )`;
  } else {
    return `( Ive only been working on this for around ${truncated} days. )`;
  }
}
