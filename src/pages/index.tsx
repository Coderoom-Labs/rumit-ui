import { createBrowserRouter } from "react-router-dom";
import ComponentsIndex from "./components";
import HomeIndex from "./home";
import ButtonPage from "./components/button";
import ListPage from "./components/list";
import { FormPage } from "./components/form";

export default function MainRoutes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <HomeIndex />,
    },
    {
      path: "/components",
      element: <ComponentsIndex />,
      children: [
        {
          path: "/components/button",
          element: <ButtonPage />,
        },
        {
          path: "/components/list",
          element: <ListPage />,
        },
        {
          path: "/components/form",
          element: <FormPage />,
        },
      ],
    },
  ]);
}
