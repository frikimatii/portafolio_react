import React from "react";
import "./Sobremi.css";
import p1 from "../componentes/img/p1.jpg";
import p2 from "../componentes/img/p2.jpg";
import p3 from "../componentes/img/p3.jpg";
import p4 from "../componentes/img/p4.jpg";
import p5 from "../componentes/img/p5.jpg";

export function Sobremi() {
  return (
    <section className="container text-center" id="aboutme">
      <div className="row">
        <div className="col-sm-5 box2">
          <div className="sombremi">
            <h4 className="titulosobremi">
              <u>About Me</u>
            </h4>
            <h5>Informacion Sobre MI</h5>

            <p>
              hace mas de un anios se me desperto el conocimiento de queres
              aprender programacion y a media de que avanzo con mi conocimento
              me sigo asombreando de las coasa q se puede hacer con
              programacion, ojala pueda aprender todos los lenguajes, pero poco
              a poco, y despues sobre mi nada me gusta escuchar musica y salir a
              pasear juntarse con amigo y pasarla bien.{" "}
            </p>
          </div>
          <div className="hobbies">
            <h5>Hobies</h5>
            <div className="avion">
              <i className="bi bi-airplane fs-1 "></i>
            </div>
            <div className="control">
              <i class="bi bi-controller fs-1"></i>
            </div>
            <div className="nota">
              <i className="bi bi-music-note-beamed fs-1 "></i>
            </div>
            <div className="martillo">
              <i className="bi bi-hammer fs-1 "></i>
            </div>
            <div className="foco">
              <i className="bi bi-lightbulb fs-1 "></i>
            </div>
            <div className="pieza">
              <i className="bi bi-puzzle-fill fs-1 "></i>
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={ p3 } className="photo1" />
              </div>
              <div className="col">
                <img src={ p5 } className="photo1" />
              </div>
            </div>
            <div className="row">
              <div className="col photo3"> 
              <img src={ p2 } className="photo2" />
              </div>
              <div className="col photo4">
                
              <img src={ p1 } className="photo2" />
              </div>
              <div className="col photo5">
              <img src={ p4 } className="photo2" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
