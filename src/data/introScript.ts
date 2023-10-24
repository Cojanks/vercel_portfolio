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
    2: "I'm well... [* dramatic head motion to the large text *]",
    3: '👋',
    4: `I build delightful Front End experiences.`,
    5: '....',
    6: "And let's be honest, who doesn't love a bold sans-serif like that, hmm?",
  },
};

export const introSubtitles: { [key: number]: string } = {
  1: 'Front End Developer',
  2: 'Internet Bard [Lvl 5]',
  3: 'Austin, TX',
};
