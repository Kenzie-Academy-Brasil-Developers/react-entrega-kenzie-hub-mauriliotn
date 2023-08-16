import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./providers/UserContext";
import { useContext } from "react";
import { Loading } from "./components/Loading";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer theme="dark" autoClose={1500} />
    </>
  );
}

export default App;
