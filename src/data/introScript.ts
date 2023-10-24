type ScriptType = {
  delay: number;
  script: {
    [key: number]: string;
  };
};

export const scriptDetails: ScriptType = {
  delay: 1.6,
  script: {
    1: 'Hi !',
    2: "I'm well... [* dramatic head motion to the large text *]",
    3: '👋',
    4: 'I build delightful experiences for the web.',
    5: '....',
    6: "( Be honest, who doesn't love a bold sans-serif, hmm? )",
  },
};
