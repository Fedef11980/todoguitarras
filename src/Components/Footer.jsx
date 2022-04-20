import React from "react";
import { Link } from "react-router-dom";
import "../Components/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="container conte">
        <div className="row">
          <div className="col-4 pie">
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link to="/Nosotros" className="text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Sucursal
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Politica de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/Contacto" className="text-white">
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 pie">
            <h4>Ayuda</h4>
            <ul>
              <li>
                <Link to="/" className="text-white">
                  Preguntas
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Envíos
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white">
                  Órdenes
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 pie">
            <h4>Síguenos</h4>
            <div className="social-links">
              <Link to="/">
                <i>
                  <FaFacebookF />
                </i>
              </Link>
              <Link to="/">
                <i>
                  <AiOutlineTwitter />
                </i>
              </Link>
              <Link to="/">
                <i>
                  <AiOutlineInstagram />
                </i>
              </Link>
              <Link to="/">
                <i>
                  <FaLinkedin />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
