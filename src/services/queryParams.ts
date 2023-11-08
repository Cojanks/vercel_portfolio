import { useSearchParams } from 'react-router-dom';

export function getParamsof(param: string) {
  const [queryParameters] = useSearchParams();
  return queryParameters.get(param);
}
