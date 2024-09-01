
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import imgInicio1 from "../../img/img1.jpg"
import imgInicio2 from "../../img/img2.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

import InfoCard from "../component/infoCard.jsx"
import ProfDestacados from "../component/profDestacados.jsx";
import { Link } from "react-router-dom";
import SobreNosotros from "../component/sobreNosotros.jsx";

export const Inicio = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    AOS.init({
        duration: 2000, // Duración de la animación en milisegundos
        once: true, // Si se establece en true, la animación solo se ejecutará una vez
    });
}, []);

  return (
    <>
      <section className="p-0 m-0">
        <div className="container-fluid p-0">
          <div className="position-relative vh-100 w-100">
            <img
              src='https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
              alt="..."
            />
            <div className="position-absolute  col-10 col-md-8 ms-md-0 ms-2 text-start text-light text-marron text-presentacion bg-opacity-50 p-3 rounded"
              style={{ top: '60%', left: '40%', transform: 'translate(-50%, -50%)', maxHeigth: '100%'}}>
                <h3 className="m-0">Bienvenidos a</h3>
              <h1 className="mb-4 display-1 m-0" style={{fontWeight:'500'}}><span style={{color:'#a9d7cc'}}>Hablemos</span><span style={{color:'#fdb235'}}>UY</span></h1>
              
              <div className="d-flex flex-column gap-1 m-2 align-items-center w-100 mt-4">
                {!store.logged && (
                  <Link to="/vista-login" className="w-100">
                    <button type="button" className="btn btn-custom-5 col-md-8 col-12">
                      Iniciar sesión
                    </button>
                  </Link>
                )}
                {!store.logged && (
                  <Link to="/vista-register" className="w-100">
                    <button type="button" className="btn btn-custom-5 col-md-8 col-12">
                      Regístrate Gratis
                    </button>
                  </Link>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="px-5 d-flex flex-column align-items-center">
        <div className="my-auto">
          <SobreNosotros />
        </div>
      </section>
      <section className="px-5 d-flex flex-column align-items-center">
        <div className="my-auto">
          <h1 className="text-inicio my-5 text-center display-1">¿Cómo funciona?</h1>
          <div className="row justify-content-evenly text-center">

            <InfoCard title={<Link to={store.logged == false && "/vista-register"} className="text-cardInfo fs-3 text-decoration-none">Regístrate</Link>}
              description={"Primero debes registrarte y verificar tu correo, sólo toma 1 minuto y es gratis."}
              icono={"fa-solid fa-arrow-right"} />

            <InfoCard title={<Link to={store.logged == true ? "/profesionales" : "/vista-login"} className="text-cardInfo fs-3 text-decoration-none">Agendar sesión</Link>}
              description={"Inicia sesión para poder ver la lista de nuestros profesionales, sus especialidades, ver qué días y horarios que tienen disponibles y luego, agendar en el que prefieras."}
              icono={"fa-regular fa-calendar-days"} />

            <InfoCard title={<Link to={store.logged == false && "/vista-login"} className="text-cardInfo fs-3 text-decoration-none">Ingresar a la sesión</Link>}
              description={"Por último, debes acceder al sitio el día agendado, donde tendrá lugar la sesión con el/la profesional."}
              icono={"fa-regular fa-comments"} />
          </div>
        </div>
      </section>
      <section className="d-flex flex-column">
        <div className="my-auto">
          <h2 className="text-inicio my-5 text-center display-1" data-aos="fade-left">Profesionales Destacados</h2>
          <div className="row justify-content-center">
            <ProfDestacados />
          </div>
        </div>
      </section>
    </>
  );
};
