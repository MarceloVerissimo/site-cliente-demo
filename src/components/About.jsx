import React from 'react'
import './About.css';

function About() {
  return (
    <section id='sobremim' className='sobremim'>
      <div className='sobre-img'>
          <img src="img3.jpg" alt="Nathalia Verissimo" />
      </div>

      <div className='sobre-content'>
        <h2 className='titulo1'>Sobre Mim</h2>
        <p className='texto1'>Eu sou <strong>Nathalia Veríssimo</strong>, Comecei minha jornada empreendendo na loja da minha família e vivi na pele a dificuldade de lidar com o financeiro sem clareza. Me formei em Administração e descobri minha paixão por finanças empresariais. Percebi que muitos empreendedores passam pelo mesmo: trabalham muito, vendem bem, mas nunca veem o lucro real. Por isso, criei minha mentoria: para ensinar de forma simples e prática como organizar o financeiro e ter lucro de verdade. Hoje curso Contabilidade para me aprofundar ainda mais e continuar ajudando empreendedores a construírem negócios lucrativos e leves.</p>
      </div>
    </section>
  )
}

export default About