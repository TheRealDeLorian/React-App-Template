import toast from "react-hot-toast";
import { QueryClient, QueryCache, MutationCache } from "@tanstack/react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      toast.error(`Global Error: ${(error as Error).message}`);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      toast.error(`Global Error: ${(error as Error).message}`);
    },
  }),
});

export const getQueryClient = () => {
  return queryClient;
}