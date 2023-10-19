import { getCategories, getTags } from '../store/slices/definitionsSlice';
import { dispatch } from '../store/store';
import supabase from './supabase';

export async function getDefinitions() {
  const { data: tags, error: tagError } = await supabase
    .from('skill_tags')
    .select();

  if (tagError) {
    console.error(tagError);
    throw new Error('Tags not found');
  }

  dispatch(getTags({ tags: tags }));

  const { data: categories, error: categoriesError } = await supabase
    .from('skill_categories')
    .select();

  if (categoriesError) {
    console.error(categoriesError);
    throw new Error('Tags not found');
  }
  dispatch(getCategories({ categories: categories }));
}
