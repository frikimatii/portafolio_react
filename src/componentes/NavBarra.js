import React from "react";
import "./NavBarra.css";

export function NavBarra() {
  return (
    <nav className="navbar bg-black" id="navbar">
          <div className="triangulo"></div>
        <ul className="nav justify-content-center">
         
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">
              SObre Mi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">
              Redes
            </a>
          </li>
          <li className="nav-item">
            <div>
            
            </div>
          </li>
        </ul>
        <i className="bi bi-battery-full"></i>
        <button type="button" class="btn btn-outline-info"><i class="bi bi-envelope-paper"> Enviar
                    E-mail</i></button>
    </nav>
  );
}
