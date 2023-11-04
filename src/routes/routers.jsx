import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import AutosMain from "../pages/Autos/AutosMain";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/vehicles",
        element: (
          <PrivateRoute>
            <AutosMain></AutosMain>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth-pages/login",
    element: <Login></Login>,
  },
]);

export default router;
