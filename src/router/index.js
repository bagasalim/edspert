import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog, Checkouts, Details, Instructions } from "../pages";
const routeList = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Catalog />,
      },
      {
        path: "/detail:id",
        element: <Details />,
      },
      {
        path: "/checkout",
        element: <Checkouts />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routeList} />;
};

export default Router;
