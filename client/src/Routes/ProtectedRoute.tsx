import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

function ProtectedRoute({ children, redirectPath = "/login" }: any) {
  const { token } = useAppSelector((state) => state.auth);
  const isAuth = token;
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
