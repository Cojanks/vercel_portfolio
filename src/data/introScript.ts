type ScriptType = {
  delay: number;
  script: {
    [key: number]: string;
  };
};

export const scriptDetails: ScriptType = {
  delay: 2,
  script: {
    1: 'Hi !',
    2: "I'm well... [* dramatic head motion to the large text *]",
    3: '👋',
    4: 'I build delightful experiences for the web.',
    5: '....',
    6: '(And honestly, who doesnt love a big, bold, sans-serif?)',
  },
};
