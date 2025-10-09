import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contato.css";

export default function Contato() {

  const [form, setForm] = useState ({ name:'', email:'', mensagem:'', empresa:''});
  const [loading, setLoading] = useState (false);
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.company) return;

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Preencha todos os campos." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Mensagem enviada! Em breve entraremos em contato." });
        setForm({ name: "", email: "", message: "", company: "" });
      } else {
        console.error("Erro envio:", data);
        setStatus({ type: "error", message: data?.error || "Erro ao enviar mensagem. Tente mais tarde." });
      }
      } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Erro de conexão. Tente novamente mais tarde." });
      } finally {
      setLoading(false);
    }
  }

  return (
    <section id='contato' className='contato'>
        <h2 className='h2-titulo'>Entre em contato</h2>
          <div className='contato-div'>
            <form className='contato-form' onSubmit={handleSubmit} noValidate>
              <label>
                <span>Nome:</span>
                <input type="text" name='name' placeholder='Seu Nome' value={form.name} onChange={handleChange} required/>
              </label>
              <label>
                <span>Email:</span>
                <input type="email" name='email' placeholder='seu@email.com' value={form.email} onChange={handleChange} required/>
              </label>
              <label>
                <span>Mensagem</span>
                <textarea name="mensagem" rows={6} placeholder='Como posso ajudar seu negócio?' value={form.mensagem} onChange={handleChange}></textarea>
              </label>
              <button className='btn-enviar' type='submit' disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {status && (
                <p className={`form.status ${status.type === "sucess" ? "sucess" : "error"}`}>
                  {status.mensagem}
                </p>
              )}
            </form>

            <aside className='contato-info'>
              <h3 className="h3-msg">Outras formas de contato:</h3>
              <p className='contato-msg'>
                Estou aqui para ajudar você a transformar seu negócio. Entre em contato e vamos conversar sobre como podemos trabalhar juntos.
              </p>

              <div className='media-item'>
                <FiMail size={30} className='contato-icon'/>
                <div className="media-texto">
                  <strong className="strong">Email</strong>
                  <div>contato@mentorialucroclaro.com.br</div>
                </div>
              </div>

              <div className='media-item'>
                <FiPhone size={30} className='contato-icon'/>
                <div className="media-texto">
                  <strong className="strong">Telefone</strong>
                  <div>(21)99999-9999</div>
                </div>
              </div>

              <div className='media-item'>
                <FiMapPin size={30} className='contato-icon'/>
                <div className="media-texto">
                  <strong className="strong">Localização</strong>
                  <div>Rio de Janeiro, RJ </div>
                </div>
              </div>
            </aside>
          </div>  
    </section>
  );
}