import { createBrowserRouter } from "react-router-dom";
import { Login, Root } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/root",
    element: <Root />,
  },
]);
