
import React from "react"
import { NavBarra } from "./componentes/NavBarra"
import { Banner } from "./componentes/Banner"
import { Sobremi } from "./componentes/Sobremi"
import { Proyecto } from "./componentes/Proyectos"
import { Footer } from "./componentes/Footer"

export function App(){
    return <>
        <NavBarra />
        <Banner />
        <Sobremi />
        <Proyecto/>
        <Footer />
    </>
}

export default App