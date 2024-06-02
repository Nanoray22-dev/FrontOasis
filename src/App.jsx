import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

axios.defaults.baseURL = 'https://backoasis-production.up.railway.app/';
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <MantineProvider>
          <Routes />
        </MantineProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
