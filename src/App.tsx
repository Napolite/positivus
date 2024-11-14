import "./App.css";
import Clientele from "./components/clientele/clientele";
import NavBar from "./components/Navbar/Navbar";
import CaseStudy from "./Pages/case-studies/caseStudy.tsx";
import Landing from "./Pages/Landing/landing";
import Services from "./Pages/P-Services/services.tsx";
import WorkingProcess from "./Pages/working-process/workingProcess.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Clientele />
      <Services />
      <CaseStudy />
      <WorkingProcess />
    </>
  );
}

export default App;
