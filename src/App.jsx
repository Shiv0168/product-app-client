import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditProductPage from "./pages/EditProductPage";
import AddProductPage from "./pages/AddProductPage";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddProductPage />,
  },
  {
    path: "/edit/:_id",
    element: <EditProductPage />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
