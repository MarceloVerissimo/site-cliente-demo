import React from 'react'
import './Inicio.css';

const Inicio = () => {
  return (
    <section className='seção-inicio'>
      <div className='particulas'>
        <div className='particula'></div>
        <div className='particula'></div>
        <div className='particula'></div>
        <div className='particula'></div>
        <div className='particula'></div>
        <div className='particula'></div>
        <div className='particula'></div>
        <div className='particula'></div>
      </div>

      <div className='inicio'>
        <h1>O Lucro é o combustível
        <br />
        da <span className='destaque-gold'>Liberdade.</span>
        </h1>
        <p>
          Mentoria financeira para empreendedores com <strong className='strong-name'>Gabriela Duarte</strong>.
        </p>
        <button className='button' onClick={() => { window.open('https://form.respondi.app/98W5pboL?fbclid=PAZXh0bgNhZW0CMTEAAacuxyH2Zy-V_qONYoARHoFsbQa8KQNob4oTiKJt-mCNRsbAtJcxPMhSnZJvNA_aem_PHvJCWEfFKneyb-UeK0ULQ') }}>
          Quero mais clareza agora
          </button>
      </div>
    </section>
  )
}

export default Inicio