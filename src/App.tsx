import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import './styles/global.css';

function App() {
  return (
    <div>
      <Hero />
      <Features />
      <About />
    </div>
  );
}

export default App;