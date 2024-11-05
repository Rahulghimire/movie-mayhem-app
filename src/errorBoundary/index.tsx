import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;

  return (
    <div className="flex flex-col h-[100vh] items-center justify-center gap-y-3">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
