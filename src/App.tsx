import "./App.css";
import Clientele from "./components/clientele/clientele";
import NavBar from "./components/Navbar/Navbar";
import Landing from "./Pages/Landing/landing";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Clientele />
    </>
  );
}

export default App;
