import { createBrowserRouter } from "react-router-dom";
import { Route } from "./constants";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: Route.home,
    element: <App />,
    children: [
      {
        path: "/hello",
        element: <div className="text-6xl">Hello</div>,
      },
    ],
  },
]);
