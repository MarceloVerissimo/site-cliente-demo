import React from 'react'
import './Inicio.css';

function Inicio() {
  return (
    <section id='inicio' className='inicio'>
        <div className='slogan-text'>
          <h1>O Lucro é o combustível da liberdade.</h1>
          <p>Mentoria financeira para lojistas PJ com <strong className='p1'>Nathália Verissimo</strong>.</p>
           <div className='b1'>
            <button onClick={() => {
            document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
            }}>Agende sua Mentoria</button>
           </div>
        </div>
        <div className='img1'>
          <img src="img1.png" alt="Nathália Verissimo" />
        </div>
    </section>
  )
}

export default Inicio