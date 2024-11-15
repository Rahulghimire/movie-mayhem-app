import { FallBack } from "@/errorBoundary/FallBack";
import Layout from "@/layouts";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorFallback, LandingPage, MovieDetails } from "./lazyImport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FallBack />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <ErrorFallback />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
        errorElement: <ErrorFallback />,
      },
    ],
  },
]);
