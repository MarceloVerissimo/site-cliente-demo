import React from 'react'
import './LucroClaro.css';
import { FaChartLine } from "react-icons/fa";

const LucroClaro = () => {
  return (
    <section id='mentorialucro' className='mentorialucro'>
        <FaChartLine className="sobrementoria-icon" />
        <h2 className='h2-mentoria'>A Mentoria Lucro Claro</h2>
        <div className='boxtotal'>
        <div className='box1'>
            <h3>O Ciclo que Te Cansa e Não Te Traz Retorno</h3>
                <p>Você trabalha sem parar. Vende, paga fornecedor, paga funcionário… mas quando vai ver o resultado, não sobrou nada.
Nem lucro, nem salário.
O dinheiro entra e desaparece, e você já nem sabe pra onde foi.

Enquanto isso, as contas continuam chegando, o estoque te engole, e o medo de quebrar bate toda vez que precisa pagar mais uma despesa.
Mas o pior não é isso.
O pior é achar que “tá tudo bem” porque as vendas estão boas, quando, na verdade, seu negócio está sangrando silenciosamente.</p>
        </div>
        <div className='box2'>
            <h3>O Caminho para Parar de Vender no Escuro</h3>
                <p>A verdade é dura, mas libertadora: você não precisa vender mais, precisa entender o seu financeiro.
E é exatamente isso que eu faço na minha mentoria: te mostro, passo a passo, onde o dinheiro está vazando, como corrigir e como fazer o lucro finalmente sobrar no caixa.

Se você continuar empurrando esse problema, o preço vai ser alto: trabalhar o mês inteiro e continuar sem ver o próprio salário.
Mas se decidir agir agora, vai descobrir que lucro não é sorte, lucro é clareza, organização e método.
E eu vou te guiar nesse caminho!</p>
        </div>
        </div>
    </section>
  )
}

export default LucroClaro
