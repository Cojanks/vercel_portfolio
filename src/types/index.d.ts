// API
export type TagDefinitionsType = {
  [key: number]: string;
};

export type TagDBType = {
  id: number;
  name: string;
};

export type CategoryDBType = {
  id: number;
  name: string;
  description: string;
  tag_ids: number[];
};

export type DefinitionsType = {
  tags: TagDefinitionsType;
  errors: {
    [key: string]: string;
  };
};

export type SocialsType = {
  [key: number]: {
    [key: number]: number;
  };
};

export type CategoryListSocialsType = {
  isLoading: boolean;
  tagSocialData: SocialsType;
};

export type TimelineDBType = {
  id: number;
  company: string;
  contentList: string[];
  endDate: string;
  endingDetails: string | null;
  extraEvent: {
    title: string;
    details: string;
  } | null;
  iconList: string[];
  position: string;
  startDate: string;
  startingDetails: string | null;
};

// Easter Eggs
export type EggListType = {
  logoClicked5: boolean;
  logoClicked15: boolean;
};

export type InteractionsListType = {
  logoClicks: number;
};

export interface EasterEggsStoreType {
  eggList: EggListType;
  eggInteractionsList: InteractionsListType;
}

// Page Settings
export type PageSettingsType = {
  primaryColor: string;
};
