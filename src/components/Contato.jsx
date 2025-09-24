import React from 'react'

function Contato() {
  return (
    <section id='contato' className='contato'>
        <h2>Entre em contato</h2>
        <form action="">
            <input type="text" placeholder='Seu Nome' required />
            <input type="email" placeholder='Seu Email' required />
            <textarea placeholder='Sua Mensagem'></textarea>
            <button type='submit'>Enviar</button>
        </form>        
    </section>
  )
}

export default Contato