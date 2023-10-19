// Tags
export type TagDefinitionsType = {
  [key: number]: string;
};

export type TagDBType = {
  id: number;
  name: string;
};

// Desc
export type CategoryDBType = {
  id: number;
  name: string;
  description: string;
};

export type CategoryDefinitionsType = {
  [key as number]: { name: string; description: string };
};

export type DefinitionsType = {
  tags: TagDefinitionsType;
  categories: CategoryDefinitionsType;
};
