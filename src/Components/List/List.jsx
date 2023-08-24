import React from "react";
import { Box } from "../UI"
import { lista } from "../../info"; 


const List = () => {
    console.log(lista) // aprender a regresar un objeto con arreglo y destructurado usan un map para recorrerlo
    return <Box>
        {
            lista.cargos.map( ({id, type, value, from, date})=>{
                return <div key={id}>
                    <span>{type}</span>
                    <span>{value}</span>
                    <span>{from}</span>
                    <span>{date}</span>
                </div>
            } )
        }
    </Box>

}
export default List;