import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SobreNosotros = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Duración de la animación en milisegundos
            once: true, // Si se establece en true, la animación solo se ejecutará una vez
        });
    }, []);

    return (
        <>
            <h1 className="text-inicio my-5 text-center display-1 col-12" data-aos="fade-left">Sobre nosotros</h1>

            <div className='mx-auto col-12 col-md-10'>
                <h4 className='mb-5 text-inicio' data-aos="fade-right">
                    En HablemosUy, nuestra misión es facilitar tu acceso a profesionales de la salud mental especializados en diversas áreas. Ya sea que necesites apoyo con la ansiedad, el estrés, la depresión, o simplemente desees mejorar tu bienestar emocional, estamos aquí para ayudarte.
                </h4 >
                <h4 className='mb-5 text-inicio' data-aos="fade-left">
                    Con nuestra plataforma, puedes encontrar y agendar fácilmente consultas con psicólogos calificados, virtualmente desde la comodidad de tu hogar.
                </h4 >

                <h4 className='mb-5 text-inicio' data-aos="fade-right">
                    Nuestro objetivo es ofrecerte un espacio seguro y accesible para cuidar de tu salud mental.
                    Gracias por confiar en HablemosUy para tu bienestar. ¡Estamos aquí para ti!
                </h4 >
            </div>
        </>
    );
};

export default SobreNosotros;
