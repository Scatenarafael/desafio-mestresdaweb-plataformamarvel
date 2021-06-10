import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
