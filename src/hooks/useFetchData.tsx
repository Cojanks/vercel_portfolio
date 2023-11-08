import { useQuery } from '@tanstack/react-query';
import supabase from '../services/supabase';

const getData = async (table: string) => {
  const { data, error } = await supabase.from(table).select();

  if (error instanceof Error) {
    console.log(error.message);
  }

  if (!data) {
    throw new Error(`No data in table: ${table}`);
  }

  return data;
};

export default function useFetchData(table: string) {
  return useQuery({
    queryKey: [table],
    queryFn: () => {
      return getData(table);
    },
  });
}
