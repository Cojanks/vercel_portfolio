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

export function transformDate(date: string) {
  if (date.split('.')[1].includes('-')) {
    return `${date.split('.')[0]} - ???`;
  } else {
    const dateTemp = new Date(date);
    const monthStr = dateTemp.toLocaleString('default', { month: 'long' });
    return `${date.split('.')[0]} - ${monthStr}`;
  }
}

export function setCssVariable(cssVar: string, value: string) {
  document.documentElement.style.setProperty(cssVar, '#' + value);
}

export function hexToRGB(hex: string, alpha = '1') {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
