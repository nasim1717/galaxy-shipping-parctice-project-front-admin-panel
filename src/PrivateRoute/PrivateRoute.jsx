import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userAuth?.user);
  if (user) {
    return children;
  }
  return navigate("/auth-pages/login");
};

export default PrivateRoute;
