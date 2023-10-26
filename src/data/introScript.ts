type ScriptType = {
  delay: number;
  script: {
    [key: number]: string;
  };
};

export const chatScript: ScriptType = {
  delay: 0.4,
  script: {
    1: 'Hi !',
    2: 'My name is... <head motion to the large text on the left />',
    3: '👋',
    4: `I build delightful Front End experiences.`,
    5: '....',
    6: "And let's be honest, who doesn't love a big, bold sans-serif like this, hmm?",
  },
};

export const introSubtitles: { [key: number]: string } = {
  1: 'Front End Developer',
  2: 'Internet Bard [Lvl 5]',
  3: 'Austin, TX',
};
