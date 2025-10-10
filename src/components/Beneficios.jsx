import React from "react";
import { Lightbulb, BarChart3, PiggyBank, TrendingUp, ShieldCheck } from "lucide-react";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <section id='beneficios' className="beneficios">
      <h2 className="beneficios-title">Benefícios</h2>
      <div className="beneficios-grid">
        <div className="beneficio-item">
          <Lightbulb size={48} color="#d4af37" />
          <h5 className="beneficio-text">Clareza financeira</h5>
          <p className="beneficio-p">Você vai entender exatamente pra onde vai cada real da sua empresa.</p>
        </div>
        <div className="beneficio-item">
          <BarChart3 size={48} color="#d4af37" />
          <h5 className="beneficio-text">Controle total do caixa</h5>
          <p className="beneficio-p">Chega de susto no final do mês. Você vai saber o que entra, o que sai e o quanto realmente sobra.</p>
        </div>
        <div className="beneficio-item">
          <PiggyBank size={48} color="#d4af37" />
          <h5 className="beneficio-text">Salário fixo pro dono</h5>
          <p className="beneficio-p">Nada de viver do que sobra. Você vai ter um salário definido, previsível e justo pelo trabalho que faz.</p>
        </div>
        <div className="beneficio-item">
          <TrendingUp size={48} color="#d4af37" />
          <h5 className="beneficio-text">Lucro real no caixa</h5>
          <p className="beneficio-p">Não é só vender mais, é fazer o dinheiro ficar. Você vai aprender a transformar faturamento em resultados.</p>
        </div>
        <div className="beneficio-item">
          <ShieldCheck size={48} color="#d4af37" />
          <h5 className="beneficio-text">Segurança nas decisões</h5>
          <p className="beneficio-p">Com os números organizados, você para de decidir no “achismo” e começa a agir com estratégia e confiança.</p>
        </div>
      </div>
    </section>
  );
};


export default Beneficios;
