import "./App.css";
import Clientele from "./components/clientele/clientele";
import NavBar from "./components/Navbar/Navbar";
import CaseStudy from "./Pages/case-studies/caseStudy.tsx";
import Landing from "./Pages/Landing/landing";
import Services from "./Pages/P-Services/services.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Clientele />
      <Services />
      <CaseStudy />
    </>
  );
}

export default App;
