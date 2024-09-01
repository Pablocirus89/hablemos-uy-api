import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const { store, actions } = useContext(Context)
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.cerrarSesion(navigate);
  };

  useEffect(() => {
    actions.validToken();

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav nav-underline">
      <div className="container-fluid">
        <div className="d-flex align-items-center ms-1 ms-md-5">
          <Link className="navbar-brand text-light d-flex align-items-center" to="/">
            <img className="logo" src={logo} alt="Logo" />
            <div className="ms-3">
              <span className="fs-4 d-block">HablemosUY</span>
              <span className="fs-6 ms-3 d-block">Salud mental</span>
            </div>
          </Link>
        </div>

        <button className="navbar-toggler text-nav me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link mx-4 text-nav" aria-current="page" to="/emergencias">Emergencias</Link>
            <Link className="nav-link mx-4 text-nav" aria-current="page" to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            {store.logged && store.dataUser?.id && (<Link className="nav-link text-nav mx-4" to="/profesionales">Profesionales</Link>
            )}
            {store.logged && store.dataUser?.id && (<Link className="nav-link text-nav mx-4" to={"/perfil/" + store.dataUser?.id}>Perfil</Link>
            )}


            {/* <Link className="nav-link mx-4 text-light" to="/">Precios</Link> */}

            {store.logged && (<Link to="/"> <button type="button" className="btn btn-nav mt-1 ms-4 me-5" onClick={handleLogout}>
              Cerrar sesión
            </button></Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
