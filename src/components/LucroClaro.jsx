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
            <h3>Titulo do texto</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='box2'>
            <h3>Titulo do texto</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
    </section>
  )
}

export default LucroClaro
