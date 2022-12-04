import React from "react";
import "./Banner.css";
import { DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiGit, DiMysql, DiReact  } from "react-icons/di";
import { RxInstagramLogo,RxTwitterLogo, RxGithubLogo } from "react-icons/rx";
import CV from "../componentes/img/CV.pdf"

import img1 from "../componentes/perfiltwo.jpg";

export function Banner() {
  return (
    <section className="container-fluid p-3" id="cabezera">
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <figure className="figure">
              <img
                src={img1}
                className="figure-img img-fluid rounded "
                alt="frikimatii"
                id="perfil"
              />
              <figcaption className="figure-caption">
                CABRON TU NO VEZ !!
              </figcaption>
            </figure>
          </div>
          <div className="col-8">
            <div className="aling-self-center">
              <div className="boxme">
                <h1 className="titulo">
                  <strong>
                    <u>
                      Programador Junior <br></br>& Diseñador Wed
                    </u>
                    &uarr;
                  </strong>
                </h1>
                <h4 className="nombre">Fernando Matias Juarez</h4>
                <br></br>
                <p>
                  Hola bienvenidos a mi portafolio!!, me llamo Matias y hace mas
                  de un años que estudio por mi cuenta cuento con conosimiento
                  basico en HTML, Css y JavaScritps, lo basico para empezar,
                  abajo dejo mi CV y Mis Redes.
                </p>
                <button type="button" className="btn btn-dark" id="btnCV">
                  <a href={ CV } download> Descarga</a>
                </button>
              </div>
            </div>
            <div className="icons">
              <div className="redes">
                <a href="#!">
                 <p><RxInstagramLogo/> Instagram</p>
                </a>
                <a href="#!">
                  <p><RxTwitterLogo/ >Twitter</p>
                </a>
                <a href="#!">
                  <p><RxGithubLogo/> GitHub</p>
                </a>
              </div>
              <div className="skills"> 
              <h1 id="html"><DiHtml5/></h1>
              <h1 id="css"><DiCss3/></h1>
              <h1 id="js"><DiJavascript1/></h1>
              <h1 id="bootra"><DiBootstrap/></h1>
              <h1 id="github"><DiGit/></h1>
              <h1 id="sql"><DiMysql/></h1>
              <h1 id="react"><DiReact/></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
