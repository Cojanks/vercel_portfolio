import { useQuery } from '@tanstack/react-query';
import { setError, setTags } from '../store/slices/definitionsSlice';
import { dispatch } from '../store/store';
import supabase from './supabase';

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

export default function useGetDefinitions() {
  const { isLoading: tagLoading, error: tagError } = useQuery({
    queryKey: ['tags'],
    queryFn: getAPITags,
  });

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

  return {
    isLoading: tagLoading || categoryLoading,
    error: tagError || categoryError,
    data: categoriesData,
  };
}
