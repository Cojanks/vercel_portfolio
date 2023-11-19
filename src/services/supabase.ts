import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_KEY, SUPABASE_URL } from '../constant';

import { PostgrestError } from '@supabase/supabase-js';

export type ExtraEventJSONType = {
  title: string;
  details: string;
};

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      examples: {
        Row: {
          category_ids: number[] | null;
          id: number;
          name: string | null;
          tag_ids: number[];
        };
        Insert: {
          category_ids?: number[] | null;
          id?: number;
          name?: string | null;
          tag_ids: number[];
        };
        Update: {
          category_ids?: number[] | null;
          id?: number;
          name?: string | null;
          tag_ids?: number[];
        };
        Relationships: [];
      };
      skill_categories: {
        Row: {
          description: string | null;
          id: number;
          name: string | null;
          tag_ids: number[] | null;
        };
        Insert: {
          description?: string | null;
          id?: number;
          name?: string | null;
          tag_ids?: number[] | null;
        };
        Update: {
          description?: string | null;
          id?: number;
          name?: string | null;
          tag_ids?: number[] | null;
        };
        Relationships: [];
      };
      skill_tags: {
        Row: {
          id: number;
          name: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      social_interactions: {
        Row: {
          id: number;
          social_action: number | null;
          tag_id: number | null;
        };
        Insert: {
          id?: number;
          social_action?: number | null;
          tag_id?: number | null;
        };
        Update: {
          id?: number;
          social_action?: number | null;
          tag_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'social_interactions_tag_id_fkey';
            columns: ['tag_id'];
            isOneToOne: false;
            referencedRelation: 'skill_tags';
            referencedColumns: ['id'];
          }
        ];
      };
      work_timeline: {
        Row: {
          company: string | null;
          contentList: string[] | null;
          endDate: string | null;
          endingDetails: string | null;
          extraEvent: ExtraEventJSONType | null;
          iconList: string[] | null;
          id: number;
          position: string | null;
          startDate: string | null;
          startingDetails: string | null;
        };
        Insert: {
          company?: string | null;
          contentList?: string[] | null;
          endDate?: string | null;
          endingDetails?: string | null;
          extraEvent?: ExtraEventJSONType | null;
          iconList?: string[] | null;
          id?: number;
          position?: string | null;
          startDate?: string | null;
          startingDetails?: string | null;
        };
        Update: {
          company?: string | null;
          contentList?: string[] | null;
          endDate?: string | null;
          endingDetails?: string | null;
          extraEvent?: ExtraEventJSONType | null;
          iconList?: string[] | null;
          id?: number;
          position?: string | null;
          startDate?: string | null;
          startingDetails?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_social_counts: {
        Args: Record<PropertyKey, never>;
        Returns: {
          tag_id: number;
          social_action: number;
          count: number;
        }[];
      };
      get_tag_social_counts: {
        Args: Record<PropertyKey, never>;
        Returns: {
          tag_id: number;
          social_1: number;
          social_2: number;
        }[];
      };
      getRefs: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      getsocials: {
        Args: Record<PropertyKey, never>;
        Returns: {
          tag_id: number;
          social_1: number;
          social_2: number;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
