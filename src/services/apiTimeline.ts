import { useQuery } from '@tanstack/react-query';
import supabase from './supabase';

const getTimelineData = async () => {
  const { data, error } = await supabase
    .from('work_timeline')
    .select()
    .order('startDate', { ascending: false });

  if (error instanceof Error) {
    console.log(error.message);
  }

  if (!data) {
    throw new Error(`No data in work_timeline tiumeline`);
  }

  return data;
};

export default function useFetchTimelineData() {
  return useQuery({
    queryKey: ['timeline'],
    queryFn: () => {
      return getTimelineData();
    },
  });
}
