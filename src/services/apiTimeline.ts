import { TimelineDBType } from '../types';
import supabase from './supabase';

export async function getWorkHistory() {
  const { data, error } = await supabase.from('work_timeline').select();

  if (error) {
    console.error(error);
    throw new Error('Timelines not found');
  }

  return data as TimelineDBType[];
}
