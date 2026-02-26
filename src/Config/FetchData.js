import { useQuery } from "@tanstack/react-query";
import { UseNews } from './UseNews'
export const FetchData = (sortby = "all") => {
  return useQuery({
    queryKey: ["News", sortby],
    queryFn: () => UseNews(sortby),
    staleTime:1000*60*60

  });
};
