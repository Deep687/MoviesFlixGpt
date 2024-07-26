import Body from "./components/Body";
import LogInPage from "./components/LogInPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  { path: "/", element: <LogInPage /> },
  {
    path: "browse",
    element: <Body />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={appRouter}>
      <div>
        <Body />
        <LogInPage />
      </div>
    </RouterProvider>
  );
};

export default App;
