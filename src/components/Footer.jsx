import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
      <div className='footer-brand'>
        <h2>Mentoria <span>Lucro Claro</span></h2>
        <p>Transformando finanças de empreendedores com clareza e estratégia.</p>
      </div>

      <div className='footer-links'>
        <h3>Links</h3>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#mentorialucro">Sobre a Mentoria</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div className='footer-contact'>
        <h3>Contato</h3>
        <p>contato@mentoriallucroclaro.com.br</p>
        <p>(21) 99999-9999</p>
        <div className='footer-socials'>
          <a href="#"><i className='fab fa-instagram'></i></a>
          <a href="#"><i className='fab fa-facebook'></i></a>
        </div>
      </div>
    </div>

    <div className='footer-bootom'>
      <p>© 2025 Mentoria Lucro Claro - Todos os direitos reservados</p>
    </div>
    </footer>
  )
}

export default Footer