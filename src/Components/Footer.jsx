import React from 'react'
import { Link } from "react-router-dom";
import "../Components/Footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'


function Footer() {
  return (
    <div className="footer">
    <div className="container conte">
      <div className="row">
        <div className="col-4 pie">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Sucursal</a></li>
            <li><a href="#">Politica de Privacidad</a></li>
            <li><Link to="/Contacto" className="text-white">Contáctenos</Link></li>            
          </ul>
        </div>
        <div className="col-4 pie">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#">Preguntas</a></li>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Órdenes</a></li>
          </ul>
        </div>
        <div className="col-4 pie">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#"><i><FaFacebookF/></i></a>
            <a href="#"><i><AiOutlineTwitter/></i></a>
            <a href="#"><i><AiOutlineInstagram/></i></a>
            <a href="#"><i><FaLinkedin/></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer