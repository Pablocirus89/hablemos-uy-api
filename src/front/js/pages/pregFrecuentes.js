import React from 'react';

const PregFrecuentes = () => {
    return (
      <section className="container my-5 col-12 col-md-8">
        <h2 className="mb-4 text-inicio">Preguntas Frecuentes</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className="fw-medium">¿Cómo puedo registrarme?</span>                
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Para registrarte, haz clic en el botón de <a href="/vista-register">"Registrarme"</a> en la parte inferior del formulario de inicio de sesión o en nuestra página de inicio. Completa el formulario con tus datos y si todo es correcto recibirás un correo con un enlace para activar tu cuenta. Este paso es necesario aunque te registres a través del servicio de registro de Google. Este proceso de verificación solo se realizará la primer vez que vayas a iniciar sesión en nuestro sitio.
              </div>
            </div>
          </div>
  
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <span className="fw-medium">¿Cómo puedo recuperar o cambiar mi contraseña?</span>               
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              En nuestra página de inicio de sesión haz clic en <a href="/vista-login">"Olvidé mi contraseña"</a>, se desplegará un modal en el que deberás ingresar tu correo y enviarlo. Recibirás un mail de HablemosUY Salud Mental para restablecer o cambiar tu contraseña siguiendo las instrucciones desde el enlace. Una vez completado este proceso ya puedes iniciar sesión con la nueva contraseña que hayas establecido. Debes tener en cuenta que gestionamos sólo las contraseñas que se generan en los registros realizados en el fomulario de registro de nuestro sitio, si te haz registrado con el servicio de Google y tienes algun inconveniente con tu contraseña, deberás gestionar tu recupeación son su servicio.
              </div>
            </div>
          </div>
  
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <span className="fw-medium">¿Cómo puedo unirme al equipo de profesionales?</span>               
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                En tu sección "Perfil" encontrarás una pestaña que contiene el formulario donde se te solicitará la información y documentación correspondiente. Algunos de los documentos requeridos son Título de Licenciado en Psicología, Registro en el Ministerio de Salud Pública (MSP), Currículum Vitae, Certificaciones Especializadas, Membresía en Asociaciones Profesionales (opcional), Participación en Congresos, Talleres y Cursos de Capacitación (opcional), y la documentación complementaria que consideres. Nuestro equipo de RR.HH verificará tus credenciales, acreditaciones y perfil, comunicándonos a la brevedad vía mail para informarte si haz sido selecionado/a para formar parte de nuestro equipo de expertos.
              </div>
            </div>
          </div>
  
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <span className="fw-medium">¿Cómo puedo acceder a asistencia de emergencia?</span>               
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Accediendo a la <a href="/emergencias">sección de emergencias</a> en la parte superior de la pantalla, encontrarás números telefónicos de asistencia psicológica inmediata y otros datos de interés.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default PregFrecuentes;
