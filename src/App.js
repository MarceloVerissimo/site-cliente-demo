import './App.css';
import About from './components/About';
import Contato from './components/Contato';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Beneficios from './components/Beneficios';
import LucroClaro from './components/LucroClaro';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <About />
      <LucroClaro />
      <Beneficios />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
