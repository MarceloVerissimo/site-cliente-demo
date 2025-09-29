import './App.css';
import About from './components/About';
import Contato from './components/Contato';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <About />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
