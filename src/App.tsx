import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppThemeProvider } from "./theme";
import { router } from "./routing/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/Store";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { ErrorFallback } from "./routing/lazyImport";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: any) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          return false;
        }
        return failureCount < 1;
      },
    },
    mutations: {},
  },
});

export const App: React.FC = () => {
  const ErrorFallbackComponent: React.FC<FallbackProps> = () => (
    <ErrorFallback />
  );

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <Provider store={store}>
          <PersistGate loading={"loading ... "} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <AppThemeProvider>
                <RouterProvider router={router} />
              </AppThemeProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </>
  );
};

export default App;
