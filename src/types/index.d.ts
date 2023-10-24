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
  errors: string[];
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
