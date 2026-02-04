import React, { useState, useRef, useEffect, useCallback } from 'react';
import christianIMG from '../assets/img/Testimonials/Christian.svg';
import javierIMG from '../assets/img/Testimonials/Javier.svg';
import jorgeIMG from '../assets/img/Testimonials/Jorge.svg';
import { useIdiom } from '../contexts/ChangeIdiom';

export const Testimonials = () => {

  const {currentIdiom} = useIdiom();
  const data = {
    "christian": {
      "phrases": currentIdiom === 'es' ? "Unas de las mejores personas para trabajar, alegre y responsable, siempre se mantiene aprendiendo y no se cierra a aprender nuevos metodos y tecnologias" : "One of the best individuals to work with, cheerful and responsible, always remains in a learning mindset and is open to acquiring new methods and technologies",
      "name": "Christian Abreu",
      "img": christianIMG,
      "rol": "Software Developer"
    },
    "javier": {
      "phrases": currentIdiom === 'es' ? "Fue un valioso miembro de nuestro equipo durante su período como pasante. Su enfoque responsable y su paciencia fueron notables, lo que resultó en un ambiente de trabajo armonioso" : "He was a valuable member of our team during his internship. His responsible approach and patience were noteworthy, resulting in a harmonious work environment.",
      "name": "Javier Ferreira",
      "img": javierIMG,
      "rol": "Software Developer"
    },
    "jorge": {
      "phrases": currentIdiom === 'es' ? "mostro un gran dominio sobre los temas y las herramientas utilizadas en el entorno laboral. Su actitud positiva y disposición para aprender nuevas tecnologías fueron invaluablemente contributivas para el equipo" : "He demonstrated a great command of the topics and tools used in the work environment. His positive attitude and willingness to learn new technologies were invaluable contributions to the team" ,
      "name": "Jorge Saldivar",
      "img": jorgeIMG,
      "rol": "Software Developer"
    }
  };

  const informaciones = Object.values(data);
  const [indice, setIndice] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = useCallback(() => {
    setIndice((prevIndice) => (prevIndice + 1) % informaciones.length);
  }, [informaciones.length]);

  const handlePrev = useCallback(() => {
    setIndice((prevIndice) =>
      prevIndice === 0 ? informaciones.length - 1 : prevIndice - 1
    );
  }, [informaciones.length]);

  const handleMove = (distance) => {
    if (distance > 50) {
      handlePrev();
      setDragStart(0);
    } else if (distance < -50) {
      handleNext();
      setDragStart(0);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragStart) {
        const dragDistance = e.clientX - dragStart;
        handleMove(dragDistance);
      }
    };

    const handleTouchMove = (e) => {
      if (dragStart) {
        const touch = e.touches[0];
        const dragDistance = touch.clientX - dragStart;
        handleMove(dragDistance);
      }
    };

    const handleEnd = () => {
      setDragStart(0);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };

    if (dragStart) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [dragStart, handlePrev, handleNext]);

  const handleStart = (e) => {
    setDragStart(e.clientX || e.touches[0].clientX);
  };

  return (
    <div className="mt-5  overflow-hidden w-full relative" onMouseDown={handleStart} onTouchStart={handleStart}>
      <div className="flex transition-transform duration-700 ease-in-out" ref={sliderRef} style={{ transform: `translateX(-${indice * 100}%)` }}>
        {informaciones.map((info, index) => (
          <div key={index} className="flex flex-col items-center select-none justify-center flex-none box-border w-full ">
            <div>
              <p className='text-white font-bold italic text-center px-5'>
              ❝ {info.phrases} ❞
              </p>
            </div>
            <img src={info.img} alt={info.phrases} style={{ width: '90px', marginTop: '10px' }} />
            <p className='text-indigo-500 font-bold italic mt-2'>
              {info.name}
            </p>
            <p className='text-white font-semibold mt-1'>
              {info.rol}
            </p>
          </div>
        ))}
      </div>

      <div className="flex space-x-2 my-5  justify-center">
        {informaciones.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 transition-colors duration-700 rounded-md  ${indice === index ? 'bg-indigo-500' : 'bg-white'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

