import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog, Checkouts, Details, Instructions } from "../pages";
import store from "../store";
const routeList = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Catalog />,
      },
      {
        path: "detail/:id",
        element: <Details />,
      },
      {
        path: "checkout",
        element: <Checkouts />,
      },
      {
        path: "instructions",
        element: <Instructions />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routeList} />
    </Provider>
  );
};

export default Router;
