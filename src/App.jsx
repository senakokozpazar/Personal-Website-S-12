import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import LangContextProvider from "./contexts/LangContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <div className="font-inter">
        <LangContextProvider>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </LangContextProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
