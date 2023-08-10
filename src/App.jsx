import { RoutesMain } from "./routes";
import { ToastContainer } from 'react-toastify';
import "./styles/index.scss"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
