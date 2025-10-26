import './Inicio.css';
import imagemHome from './assets/imagemhome.png';

function Inicio() {
  return (
    <section id='inicio' className='inicio'>
        <div className='slogan-text'>
          <h1 className='h1inicio'>O Lucro é o combustível da liberdade.</h1>
          <p className='pinicio'>Mentoria financeira para empreendedores com <strong className='p1'>Gabriela Duarte</strong>.</p>
          <p className='p-button'><strong>Dê o próximo passo rumo à clareza que vai transformar seu negócio.</strong></p>
           <div className='b1'>           
            <button onClick={() => { document.getElementById("contato").scrollIntoView({ behavior: "smooth" }); 
                }}>Quero mais clareza agora</button>
           </div>
        </div>
        <div className='img1'>
          <img src={imagemHome} alt="Gabriela Duarte" />
        </div>
    </section>
  )
}

export default Inicio