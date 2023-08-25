import React from "react";
import { Boton, Box, boton } from "../UI"
import { lista } from "../../info"; 
import Card from "../Card/Card";


const List = () => {
    // aprender a regresar un objeto con arreglo y destructurado usan un map para recorrerlo
    return <Box>
        {
            lista.cargos.map( (cargo, i)=>{
                return <Card key={i} cargo={cargo} />
            } )
        }
    <Boton>Ver más</Boton>
    </Box>

}
export default List;