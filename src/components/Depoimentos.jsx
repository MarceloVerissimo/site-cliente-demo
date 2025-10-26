import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Depoimentos.css';

export default function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      name: 'Marcelo Verissimo',
      loja: 'Hortifruti Irajá',
      texto: "Com a mentoria Lucro Real consegui organizar minhas finanças e aumentar meu lucro em 30%.",
    },
    {
      id: 2,
      name: 'Marcelo Verissimo',
      loja: 'Hortifruti Irajá',
      texto: "Com a mentoria Lucro Real consegui organizar minhas finanças e aumentar meu lucro em 30%.",
    },
    { 
      id: 3,
      name: 'Marcelo Verissimo',
      loja: 'Hortifruti Irajá',
      texto: "Com a mentoria Lucro Real consegui organizar minhas finanças e aumentar meu lucro em 30%.",
    },
  ];

  return (
    <section id='depoimentos' className='depoimentos'>
      <h2>Depoimentos</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true}}
        autoplay= {{ delay: 4000}}
        loop={true}
      >
        {depoimentos.map((dep, id) => (
          <SwiperSlide key={id}>
            <div className='depoimento-card'>
              <p>{dep.texto}</p>
              <h4>{dep.nome}</h4>
              <span>{dep.loja}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}