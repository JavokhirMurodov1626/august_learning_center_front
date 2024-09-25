import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login, Root, Admission, NotFound } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/root",
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1>Dashboard</h1>,
      },
      {
        path: "admission",
        element: <Admission />,
      },
    ],
  },
  //error page
  {
    path: "not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
]);
