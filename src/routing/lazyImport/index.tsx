import React from "react";

export const ErrorFallback = React.lazy(() => import("../../errorBoundary"));

export const LandingPage = React.lazy(() => import("../../landingPage/ui"));
export const MovieDetails = React.lazy(
  () => import("../../pages/movieDetails")
);
