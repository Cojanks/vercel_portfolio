import { setError, setTags } from '../store/slices/definitionsSlice';
import { dispatch } from '../store/store';
import supabase from './supabase';

export async function getAPITags() {
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

export async function getAPICategories() {
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
