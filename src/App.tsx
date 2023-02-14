import { BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import Routes from "./Routes";
// import { User } from "./User";

function App() {

  const token = localStorage.getItem("vibbra:Token")

  if (token == null)
  {
    return (
      <BrowserRouter>
        <Login />
      </ BrowserRouter>
    );
  }
  else
  {
    return (
      <Routes/>
    );
  }

}

export default App;
