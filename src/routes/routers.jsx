import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../Layout/Main";
import AutosMain from "../pages/Autos/AutosMain";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CustomersMain from "../pages/Customers/CustomersMain";
import ExportsMain from "../pages/Exports/ExportsMain";
import ConsigneeMain from "../pages/Consignee/ConsigneeMain";

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
      {
        path: "/customers",
        element: (
          <PrivateRoute>
            <CustomersMain></CustomersMain>
          </PrivateRoute>
        ),
      },
      {
        path: "/exports",
        element: (
          <PrivateRoute>
            <ExportsMain></ExportsMain>
          </PrivateRoute>
        ),
      },
      {
        path: "/consignees",
        element: (
          <PrivateRoute>
            <ConsigneeMain></ConsigneeMain>
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
