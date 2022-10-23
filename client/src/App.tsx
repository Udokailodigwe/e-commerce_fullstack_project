import Nav from "components/Nav/Nav";
import { useAppSelector } from "redux/hooks";
import AppRoutes from "./Routes/Routes";

const App = () => {
  const { token, authenticatedUser } = useAppSelector((state) => state.auth);

  return (
    <div>
      <Nav token={token} authenticatedUser={authenticatedUser} />
      <AppRoutes />
    </div>
  );
};
export default App;
