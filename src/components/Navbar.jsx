import React from 'react';
import { FaChartLine } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
  return (
    <header>
        <nav className='navbar'>
            <div className='navbar-container'>
              <FaChartLine className="logo-icon" />
              <div className='logo'>
                <span className='logo-name'>MENTORIA</span> 
                <br />
                LUCRO CLARO
              </div>

              <ul className='nav-link'>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobremim">Sobre Mim</a></li>
                <li><a href="#mentorialucro">A Mentoria Lucro Claro</a></li>
                <li><a href="#beneficios">Benefícios</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>

            </div>
        </nav>
    </header>    
  )
}

export default Navbar;