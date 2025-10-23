import React from 'react'
import './Inicio.css';

function Inicio() {
  return (
    <section id='inicio' className='inicio'>
        <div className='slogan-text'>
          <h1 className='h1inicio'>O Lucro é o combustível da liberdade.</h1>
          <p className='pinicio'>Mentoria financeira para empreendedores com <strong className='p1'>Nathalia Verissimo</strong>.</p>
           <div className='b1'>
            <p className='p-button'><strong>Dê o próximo passo rumo à clareza que vai transformar seu negócio.</strong></p>
            <button onClick={() => {
            window.open("https://form.respondi.app/98W5pboL?fbclid=PAZXh0bgNhZW0CMTEAAacuxyH2Zy-V_qONYoARHoFsbQa8KQNob4oTiKJt-mCNRsbAtJcxPMhSnZJvNA_aem_PHvJCWEfFKneyb-UeK0ULQ", "_blank");
            }}>Quero mais clareza agora</button>
           </div>
        </div>
        <div className='img1'>
          <img src="img2.png" alt="Nathalia Verissimo" />
        </div>
    </section>
  )
}

export default Inicio