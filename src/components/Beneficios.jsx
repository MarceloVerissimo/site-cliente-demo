import React from "react";
import { TrendingUp, FileText, DollarSign } from "lucide-react";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <section id='beneficios' className="beneficios">
      <h2 className="beneficios-title">Benefícios</h2>
      <div className="beneficios-grid">
        <div className="beneficio-item">
          <TrendingUp size={48} color="#d4af37" />
          <p className="beneficio-text">Clareza financeira</p>
        </div>
        <div className="beneficio-item">
          <FileText size={48} color="#d4af37" />
          <p className="beneficio-text">Organização administrativa</p>
        </div>
        <div className="beneficio-item">
          <DollarSign size={48} color="#d4af37" />
          <p className="beneficio-text">Aumento de lucro</p>
        </div>
      </div>
    </section>
  );
};


export default Beneficios;
