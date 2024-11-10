import "./App.css";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Recommendation />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
