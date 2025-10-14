import { FiMapPin } from "react-icons/fi";
import "./Contato.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contato() {

  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_569xmyp', 'template_8rhs3un', form.current, {
        publicKey: 'mpZUktwjTO_Gmt8Hp',
      })
      .then(
        () => {
          toast.success('Mensagem enviada com sucesso!');
          form.current.reset();
        },
        (error) => {
          toast.error("Erro ao enviar o email: " + error.message)
        },

      );
    };

   return (
    <section id='contato' className='contato'>
        <h2 className='h2-titulo'>Entre em contato</h2>
          <div className='contato-div'>
            <form ref={form} onSubmit={enviarEmail} className='contato-form' id='contact_form'>
              <label>
                <span>Nome:</span>
                <input type="text" name='name' placeholder='Seu Nome' required/>
              </label>
              <label>
                <span>Email:</span>
                <input type="email" name='email' placeholder='seu@email.com' required/>
              </label>
              <label>
                <span>Empresa:</span>
                <input type="text" name='empresa' placeholder='Sua Empresa'  required/>
              </label>
              <label>
                <span>Título:</span>
                <input type="text" name='titulo' placeholder='Titulo Mensagem'  required/>
              </label>
              <label>
                <span>Mensagem:</span>
                <textarea name='message' rows={6} placeholder='Como posso ajudar seu negócio?' required></textarea>
              </label>
              <button className='btn-enviar' type='submit' value='Send'>Enviar Mensagem</button>
            </form>

            <aside className='contato-info'>
              <h3 className="h3-msg">Outra forma de contato:</h3>
              <p className='contato-msg'>
                Estou aqui para ajudar você a transformar seu negócio. Entre em contato e vamos conversar sobre como podemos trabalhar juntos.
              </p>

              <button className="btn-whats" type="button" onClick={() => window.open("https://wa.me/5521979669091", "_blank")}>Chamar no WhastApp</button>

              <div className='media-item'>
                <FiMapPin size={60} className='contato-icon'/>
                <div className="media-texto">
                  <strong className="strong">Localização</strong>
                  <div className="loc">
                    <h3>Rio de Janeiro, RJ</h3>
                    <p>Atendimento em todo <strong>Brasil</strong> de forma <strong> 100% on-line</strong>.</p>
                   </div>
                </div>
              </div>
            </aside>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            /> 
    </section>
  );
}