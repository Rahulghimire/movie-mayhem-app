import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppThemeProvider } from "./theme";
import { router } from "./routing/routes";

export const App = () => {
  return (
    <AppThemeProvider>
      <RouterProvider router={router} />
    </AppThemeProvider>
  );
};

export default App;
