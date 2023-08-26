import React from "react";
import themeOff from "../../assets/images/themeOff.svg"
import themeOn from "../../assets/images/themeOn.svg"
import { Icono } from "../UI";

export default (tema)=>{
    const claro = <Icono  src={themeOn} alt="Tema Claro" />
    const oscuro = <Icono scr={themeOff} alt="Tema Oscuro" />

    return <>{tema ? oscuro : claro}</> // es importante regresarlo con un fragment
}
