import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Perks } from './components/Perks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Experience />
      <Perks />
      <Footer />
    </div>
  );
}
