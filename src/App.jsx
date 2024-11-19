// Import Global CSS Styles
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Fixing Content Position */}
        <div className="relative bottom-80">
          <Services />
          <Portfolio />
        </div>
      </main>
    </>
  );
}

export default App;
