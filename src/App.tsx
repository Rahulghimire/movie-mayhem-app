import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppThemeProvider } from "./theme";
import { router } from "./routing/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Define query client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: any) => {
        // Customize retry behavior based on error response
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          return false;
        }
        return failureCount < 1;
      },
      // onError: (err) => {
      //   // Notifications(
      //   //   "Error",
      //   //   `${(err as any)?.response?.data?.message}`,
      //   //   "error"
      //   // );
      // },
    },
    mutations: {
      // onError: (err) => {
      //   // Notifications(
      //   //   "Error",
      //   //   `${(err as any)?.response?.data?.message}`,
      //   //   "error"
      //   // );
      // },
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <RouterProvider router={router} />
      </AppThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
