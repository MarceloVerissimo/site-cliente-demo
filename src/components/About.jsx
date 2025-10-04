import React from 'react'
import './About.css';

function About() {
  return (
    <section id='sobremim' className='sobremim'>
      <div className='sobre-img'>
          <img src="img3.jpg" alt="Nathalia Verissimo" />
      </div>

      <div className='sobre-content'>
        <h2>Sobre Mim</h2>
        <p>Eu sou <strong>Nathalia Veríssimo</strong>, mentora financeira para lojistas. Com mais de
      uma década de experiência em gestão financeira, ajudo lojistas PJ a
      alcançar lucros sustentáveis e crescimento sólido.</p>
      </div>
    </section>
  )
}

export default About