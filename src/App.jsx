import axios from "axios";
import { UserContext, UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import "@mantine/core/styles.css";

function App() {
  axios.defaults.baseURL = "https://backoasis-production.up.railway.app/";
  axios.defaults.withCredentials = true;
  const { setUsername } = useContext(UserContext);
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes setUsername={setUsername} />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
