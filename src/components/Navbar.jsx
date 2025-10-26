import React, { useState } from 'react';
import { FaChartLine, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <div className="logo-container">
            <FaChartLine className="logo-icon" />
            <div className='logo'>
              <span className='logo-name'>MENTORIA</span>
              <br />
              LUCRO REAL
            </div>
          </div>

          {/* Botão do menu (aparece no mobile) */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          
          <ul className={`nav-link ${menuOpen ? 'active' : ''}`}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobremim">Sobre Mim</a></li>
            <li><a href="#mentorialucro">A Mentoria Lucro Real</a></li>
            <li><a href="#beneficios">Benefícios</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;