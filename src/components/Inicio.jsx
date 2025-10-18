import React from 'react'
import './Inicio.css';

function Inicio() {
  return (
    <section id='inicio' className='inicio'>
        <div className='slogan-text'>
          <h1 className='h1inicio'>O Lucro é o combustível da liberdade.</h1>
          <p className='pinicio'>Mentoria financeira para empreendedores com <strong className='p1'>Nathalia Verissimo</strong>.</p>
           <div className='b1'>
            <button onClick={() => {
            document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
            }}>Agende sua Mentoria</button>
           </div>
        </div>
        <div className='img1'>
          <img src="img2.png" alt="Nathalia Verissimo" />
        </div>
    </section>
  )
}

export default Inicio