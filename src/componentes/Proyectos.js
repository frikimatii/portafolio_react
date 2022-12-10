import React from "react";
import Fadeco from "../componentes/img/fadeco.png";
import Pokedex from "../componentes/img/pokedex.png";
import imgCLima from "../componentes/img/appclima.png"

import Lemon from "../componentes/img/lemon.png";
import Uala from "../componentes/img/uala.png";
import Paypal from "../componentes/img/Paypal.jpg";

import "./Proyecto.css";

import Pro1 from "./proyectos/fadeco.rar"
import pokerar from "./proyectos/pokedex.rar"
import appClima from "./proyectos/appClima.rar"

export function Proyecto() {
  return (
    <div className="container-fluid" id="proyecto">
      <h4 className="titulo-proyecto"> Proyecto</h4>
      <p className="font-monospace fw-bold">
        {" "}
        Dejo ALgunos de mi Proyectos para q revicen mi codigo tu opinion ME
        SIRVE{" "}
      </p>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm proyect-1">
            <h4>Diseño Web</h4>
            <p className="fs-6">
              Yo Trabajo en esta Fabrica y decidi hacer una pagina ya q no
              contaba con una. es mi primer Diseño
            </p>
            <div className="proyect-img">
              <img src={Fadeco} alt="wed" width="100%" />
            </div>
            <a href= {Pro1} >Download</a>
          </div>
          <div className="col-sm proyect-2">
            <h4>Pokedex</h4>
            <p> Una simple pokedex echa con javascript css y html</p>
            <div className="pokedex-img">
              <img src={Pokedex} alt="#" />
            </div>
            <a href= {pokerar} >Download</a>
          </div>
          <div className="col-sm proyect-3">
            <h4> AppClima </h4>
            <p  className="fs-6"> es un simple pronostico del timepo lo voy a ir mejorando de apoco</p>
            <div className="app-img">
              <img src={ imgCLima } alt="#" />
            </div>
            <a href={ appClima } >Download</a>
          </div>
        

        </div>
        <hr></hr>
        <section>
        <div class="row donaciones">
            <h5 class="text-center fw-bold" >Donaciones</h5> 
            <p class="fs-6 font-monospace lh-1">Se aceptan Donaciones para poder seguir creciendo y porder seguir expandiendo mi conocimieno, Desde ya Muchas Gracias</p>
            <div class="col-sm paypal">
                <h5 class="text-center">Paypal</h5>
                <p class="fs-6 fw-bold" >Donacions por Paypal</p>
                <img src={Paypal} alt="" class="logopaypal"/>
                <button type="button" class="btn btn-light"><a href="#!">Paypal</a></button>
            </div>
            <div class="col-sm CBU">
                <h5 class="text-center">CBU</h5>
                <p class="fs-6 fw-bold" >Donacions por cbu</p>
                <img src={Uala} alt="" class="logouala"/>
                <button type="button" class="btn btn-light"><a href="#!">Uala</a></button>
            </div>
            <div class="col-sm cripto" >
                <h5 class="text-center">Lemon-cash</h5>
                <p class="fs-6 fw-bold" >Donacions por Lemon</p>
                <img src={Lemon} alt="" class="logolemon"/>
                <button type="button" class="btn btn-light"><a href="#!">Lemon</a></button>
            </div>
        </div>
    </section>
      </div>
    </div>
    
  );
}
