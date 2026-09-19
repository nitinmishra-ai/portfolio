import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from  "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute left-[20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[120px]" />

    <div className="absolute right-[-10%] top-[40%] h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[150px]" />
  </div>

  <Sidebar />

  <main className="pt-20 lg:ml-64 lg:pt-0">
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Contact />
  </main>
</div>
  );
}

export default App;