import { Database } from '../services/supabase';

// API
export type SkillDetailsDBType =
  Database['public']['Tables']['skill_details']['Row'];
export type TagDBType = Database['public']['Tables']['skill_tags']['Row'];
export type CategoriesDBType =
  Database['public']['Tables']['skill_categories']['Row'];
export type TimelineDBType =
  Database['public']['Tables']['work_timeline']['Row'];

export type TagDefinitionsType = {
  [key: number]: {
    name: string;
    detail_ids: number[];
  };
};

export type DefinitionsType = {
  tags: TagDefinitionsType;
  errors: {
    [key: string]: string;
  };
  details: {
    [key: number]: Database['public']['Tables']['skill_details']['Row'];
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
