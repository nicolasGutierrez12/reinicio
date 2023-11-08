import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import DrawerAdmin from "../Pages/DrawerAdmin";

export const router = createBrowserRouter([
  {
    path: "/Drawer",
    element: <Login />,
  },
  {
    path: "/",
    element: <DrawerAdmin />,
  },
]);
