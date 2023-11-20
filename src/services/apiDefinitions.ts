import { useQuery } from '@tanstack/react-query';
import { setError, setTags } from '../store/slices/definitionsSlice';
import { dispatch } from '../store/store';
import supabase from './supabase';
import { setTagSocials } from '../store/slices/socialsSlice';
import { CategoryListSocialsType } from '../types';

async function getAPITags() {
  const { data: tags, error: tagError } = await supabase
    .from('skill_tags')
    .select();

  if (tagError) {
    dispatch(setError({ type: 'tags', message: 'Unable to retrieve Tags' }));
    throw new Error('Tags not found');
  }

  dispatch(setTags({ tags: tags }));
  return tags;
}

async function getAPISocialInteractions() {
  const { data, error } = await supabase.rpc('get_tag_social_counts').select();

  if (error instanceof Error) {
    console.log(error.message);
  }

  if (!data) {
    throw new Error(`No data in social_interactions table`);
  }

  const convertedData: CategoryListSocialsType = {
    isLoading: false,
    tagSocialData: {},
  };

  for (const tag of data) {
    convertedData.tagSocialData[tag.tag_id] = {
      1: tag.social_1,
      2: tag.social_2,
    };
  }

  dispatch(setTagSocials({ socials: convertedData.tagSocialData }));

  return convertedData;
}

async function getAPICategories() {
  const { data: categories, error: categoriesError } = await supabase
    .from('skill_categories')
    .select()
    .order('id', { ascending: true });

  if (categoriesError) {
    dispatch(
      setError({ type: 'catgories', message: 'Unable to retrieve Categories' })
    );
    throw new Error('Categories not found');
  }

  return categories;
}

export default function useGetSkillsData() {
  const {
    isLoading: categoryLoading,
    data: categoriesData,
    error: categoryError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return getAPICategories();
    },
  });

  const { isLoading: tagLoading, error: tagError } = useQuery({
    queryKey: ['tags'],
    queryFn: getAPITags,
  });

  const { error: socialsError } = useQuery({
    queryKey: ['socials'],
    queryFn: () => {
      return getAPISocialInteractions();
    },
  });

  return {
    isLoading: tagLoading || categoryLoading,
    error: tagError || categoryError || socialsError,
    data: categoriesData,
  };
}

export async function addAPISocialInteraction({
  tagId,
  socialAction,
}: {
  tagId: number;
  socialAction: number;
}) {
  console.log('Adding to social_interactions table');
  const { data, error } = await supabase
    .from('social_interactions')
    .insert({ tag_id: tagId, social_action: socialAction })
    .select();

  return { data, error };
}
