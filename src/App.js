import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <Banner />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
