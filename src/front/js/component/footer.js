import React, { Component } from "react";
import { Link } from "react-router-dom";


export const Footer = () => (
  <footer className="footer py-3 d-flex flex-column flex-md-row justify-content-between align-items-center text-light mt-5 px-3">
    <p className="m-0 fs-6 text-center text-md-start  ms-md-4">
      © 2024 HablemosUY. Todos los derechos reservados.
    </p>
    <div className="text-center text-md-end mt-2 mt-md-0">
      <p className="mb-1 me-md-4">
        Síguenos en redes sociales
        <a href="https://www.instagram.com/" className="text-light ms-2" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://x.com/?lang=es" className="text-light ms-2" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/home" className="text-light ms-2" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </p>
      <p className="mb-0  me-md-3">
        <Link to="/vistaLegalDocs" className="text-light mx-2 text-footer">Términos y Condiciones</Link>
        |
        <Link to="/vistaLegalDocs" className="text-light mx-2 text-footer">Declaración de Privacidad</Link>
        |
        <Link to="/vistaLegalDocs" className="text-light mx-2 text-footer">Aviso Legal</Link>
      </p>
    </div>
  </footer>
);

