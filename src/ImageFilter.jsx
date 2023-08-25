
import React from "react"
import alimentacion from "../src/assets/images/alimentacion.svg"
import utilidades from "../src/assets/images/utilidades.svg"
import salud from "../src/assets/images/salud.svg"
import transporte from "../src/assets/images/transporte.svg"
import otros from "../src/assets/images/otros.svg"

import { Icono } from "./Components/UI"

export default (type)=> {

    console.log(type)
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="Restaurante" />,
        Utilidades: <Icono src={utilidades} alt="Utilidades" />,
        Salud: <Icono src={salud} alt="Salud" />,
        Transporte: <Icono src={transporte} alt="Transporte" />,
        Default: <Icono src={otros} alt="Otros"/>,
    }

    return Images[type] || Images ["Default"]
}