import { getDefinitions } from './apiDefinitions';
import supabase from './supabase';

export async function getSkills() {
  getDefinitions();
  const { data, error } = await supabase.from('examples').select();

  if (error) {
    console.error(error);
    throw new Error('Tags not found');
  }

  return data;
}
